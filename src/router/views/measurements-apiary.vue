<template>
  <Layout>
    <div v-if="apiaries.length && ready" class="period-bar-wrapper">
      <v-container class="period-container">
        <v-row class="period-bar d-flex flex-row justify-space-between align-center">
          <div v-for="period in periods" :key="period.interval">
            <v-btn
              class="grey--text"
              :class="{ 'accent--text': period.interval === interval }"
              text
              @click="setPeriodInterval(period.interval)"
            >
              {{ period.name }}
            </v-btn>
          </div>
          <v-switch
              v-model="relativeInterval"
              :label="`${$t('Relative_startpoint')}`"
              class="pt-0 mt-0"
              :disabled="interval === 'selection'"
              dense
              hide-details
          ></v-switch>
        </v-row>
      </v-container>
    </div>

    <v-container v-if="ready" :class="{ 'measurements-content': apiaries.length }">
      <v-row>
        <v-col v-if="apiaries.length && interval !== 'selection'" cols="12">
          <div class="d-flex align-center justify-center">
            <v-icon class="color-grey-dark" @click="setTimeIndex(1)">
              mdi-chevron-left
            </v-icon>
            <span class="period-title">{{ periodTitle }}</span>
            <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="selectedDate"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-icon small class="color-grey-light ml-1" v-on="on">
                  mdi-pencil
                </v-icon>
              </template>
              <v-date-picker
                  v-model="selectedDate"
                  :first-day-of-week="1"
                  :locale="locale"
                  no-title
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="secondary" @click="modal = false">
                  {{ $t('Cancel') }}
                </v-btn>
                <v-btn
                    text
                    color="secondary"
                    @click="
                    $refs.dialog.save(selectedDate), selectDate(selectedDate)
                  "
                >
                  {{ $t('ok') }}
                </v-btn>
              </v-date-picker>
            </v-dialog>
            <v-icon
                v-if="timeIndex !== 0"
                class="color-grey-dark"
                @click="setTimeIndex(-1)"
            >
              mdi-chevron-right
            </v-icon>
          </div>
        </v-col>
        <v-col
          v-if="interval === 'selection'"
          cols="12"
          sm="4"
          md="3"
          :class="mobile ? 'py-0' : 'mx-auto'">
          <div class="d-flex align-center justify-center mr-3 mr-sm-0">
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="dates"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="dateRangeText"
                    :rules="requiredRules"
                    :label="$t('period')"
                    prepend-icon="mdi-calendar"
                    class="date-picker"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="dates"
                  :first-day-of-week="1"
                  :locale="locale"
                  range
                  no-title
                  scrollable
                  @change="checkDateOrder($event)"
              >
                <v-spacer></v-spacer>
                <v-btn text color="secondary" @click="menu = false">
                  {{ $t('Cancel') }}
                </v-btn>
                <v-btn
                    :disabled="invalidDates(dates)"
                    text
                    color="secondary"
                    @click="$refs.menu.save(dates), loadData()"
                >
                  {{ $t('ok') }}
                </v-btn>
              </v-date-picker>
            </v-menu>
          </div>
        </v-col>
        <v-col class="d-flex justify-space-between" cols="12">
          <!--class="mr-3"-->
          <Treeselect
              v-if="apiaries.length > 0"
              v-model="selectedLocationId"
              :options="sortedLocations"
              :placeholder="`${$t('Select')} ${$tc('location', 1)}`"
              :no-results-text="`${$t('no_results')}`"
              :disable-branch-nodes="true"
              :default-expand-level="1"
              search-nested
              @input="onChangedLocation($event)"
          />
        </v-col>
      </v-row>

      <div v-if="apiaries.length">
        <v-card outlined class="mt-3 mb-3">
          <v-card-title
            class="measurements-card-title"
            :class="{ 'measurements-card-title--border-bottom': showMeasurements }"
          >
            <v-row>
              <v-col cols="12" class="my-0">
                <div class="d-flex justify-space-between align-center">
                  <span>{{
                      selectedLocation
                          ? $tc('Measurement', 2) + ': ' + selectedLocation.name
                          : $tc('Measurement', 2)
                    }}</span>
                  <v-spacer></v-spacer>
                  <div class="d-flex justify-end align-center">
                    <template v-for="(icon, n) in chartColsIcons">
                      <v-icon
                          v-if="!mdScreen"
                          :key="'icon' + n"
                          class="mr-2"
                          :color="chartCols === icon.value ? 'primary' : 'grey'"
                          @click="updateChartCols(icon.value)"
                      >{{ icon.name }}</v-icon
                      >
                    </template>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-title>

          <SlideYUpTransition :duration="150">
            <v-card-text v-if="showMeasurements">
              <v-row>
                <v-col
                  v-if="measurementData === null && !noChartData"
                  class="d-flex align-center justify-center my-16"
                  cols="12"
                >
                  <v-progress-circular color="primary"
                                       size="50"
                                       indeterminate />

                </v-col>
                <v-col v-if="noChartData" cols="12" class="text-center my-16">
                  {{ $t('no_chart_data') }}
                </v-col>
              </v-row>
              <v-row v-if="measurementData !== null" class="charts mt-6">
                <v-col cols="12">
                  <div class="overline mt-0 mt-sm-3 mb-3 text-center">
                    {{
                      measurementData.resolution
                        ? ($tc('measurement', 2) + ' (' + $t('measurement_interval') + ': ' + measurementData.resolution + ')')
                        : $tc('measurement', 2)
                    }}
                  </div>
                </v-col>
                <v-col v-for="(sensor, index) in currentSensors"
                       :key="'sensor' + index"
                       cols="12"
                       class="mb-6"
                       :md="chartCols"
                >
                  <div class="overline mt-0 mt-sm-3 mb-3 text-center">
                    {{ $t(sensor) + ' ' + SENSOR_UNITS[sensor] }}
                  </div>
                  <div>
                    <chartist :class="`${interval} ${'modulo-' + moduloNr} mb-4 mb-sm-6`"
                              :ratio="`ct-chart ct-series-${index}`"
                              type="Line"
                              :data="prepareChartData(formattedData.sensors[sensor], sensor)"
                              :options="getChartOptions()"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </SlideYUpTransition>
        </v-card>
      </div>
    </v-container>
  </Layout>
</template>

<script>
import Api from '@api/Api';
import Layout from '@layouts/main.vue'
import { mapGetters } from 'vuex'
import 'chartist/dist/chartist.min.css'
import {
  readApiariesAndGroupsIfNotPresent,
  readDevicesIfNotPresent,
  readTaxonomy,
} from '@mixins/methodsMixin'
import {momentFormat, momentFullDateTime} from '@mixins/momentMixin'
import { sensorMixin } from '@mixins/sensorMixin'
import '@plugins/chartist-plugin-beep.js'
import '@plugins/chartist-plugin-legend-beep.js'
import 'chartist-plugin-pointlabels'
import 'chartist-plugin-tooltips-updated'
import 'chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.css'
import Treeselect from "@riophae/vue-treeselect";
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "MeasurementsApiary",
  components: {
    Layout,
    Treeselect,
    SlideYUpTransition,
  },
  mixins: [
    readTaxonomy,
    readApiariesAndGroupsIfNotPresent,
    readDevicesIfNotPresent,
    momentFormat,
    momentFullDateTime,
    sensorMixin
  ],
  data() {
    return {
      ready: false,
      measurementData: {},
      interval: 'month',
      timeIndex: 0,
      timeFormat: 'ddd D MMM YYYY',
      selectedDate: '',
      preselectedDate: null,
      preselectedLocationId: null,
      modal: false,
      // Chart data related
      currentSensors: [],
      formattedData: {},
      // Chart related
      showMeasurements: true,
      noChartData: false,
      chartCols: 6,
      chartColsIcons: [
        { value: 12, name: 'mdi-format-align-justify' },
        { value: 6, name: 'mdi-grid-large' },
        { value: 4, name: 'mdi-grid' },
      ],
      menu: false,
      dates: [],
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      periodStart: null,
      periodEnd: null,
    }
  },
  watch: {
    relativeInterval() {
      this.loadData();
    }
  },
  computed: {
    ...mapGetters('groups', ['groups']),
    ...mapGetters('locations', ['apiaries']),
    ...mapGetters('devices', ['devices']),
    ...mapGetters('taxonomy', ['sensorMeasurementsList']),
    dateRangeText() {
      if (this.dates.length > 0) {
        var momentDates = [
          this.momentFormat(this.dates[0], 'll'),
          this.dates[1] !== undefined
              ? this.momentFormat(this.dates[1], 'll')
              : '',
        ]
        return momentDates.join(' - ')
      } else {
        return this.$i18n.t('selection_placeholder')
      }
    },
    timeZone() {
      return this.$moment.tz.guess()
    },
    locale() {
      return this.$i18n.locale
    },
    periods() {
      return [
        { name: this.$i18n.t('Hour'), interval: 'hour' },
        { name: this.$i18n.t('day'), interval: 'day' },
        { name: this.$i18n.t('week'), interval: 'week' },
        { name: this.$i18n.t('month'), interval: 'month' },
        { name: this.$i18n.t('year'), interval: 'year' },
        { name: this.$i18n.t('selection'), interval: 'selection' },
      ]
    },
    relativeInterval: {
      get() {
        if (localStorage.beepRelativeInterval) {
          return localStorage.beepRelativeInterval === 'true';
        } else {
          return true;
        }
      },
      set(value) {
        localStorage.beepRelativeInterval = value;
      }
    },
    requiredRules() {
      var laterEndDate = true
      this.dates.length === 2 && this.dates[0] > this.dates[1]
          ? (laterEndDate = false)
          : (laterEndDate = true)
      return [
        (v) => laterEndDate || this.$i18n.t('later_end_start'), // don't allow start date later than end date
        (v) =>
            this.dates[0] !== this.dates[1] ||
            this.$i18n.t('different_end_start'), // don't allow end date identical to start date
        (v) =>
            this.dates.length > 1 ||
            this.$i18n.t('end_date') + ' ' + this.$i18n.t('not_filled'), // don't allow start date only
      ]
    },
    selectedLocation() {
      return (
          this.apiaries.filter((location) => {
            return location.id === this.selectedLocationId;
          })[0] || null
      );
    },
    selectedLocationId: {
      get() {
        return this.$store.getters['locations/selectedLocationId'];
      },
      set(value) {
        this.$store.commit('locations/setSelectedLocationId', value);
      }
    },
    sortedLocations() {
      return this.apiaries.map((apiary) => {
        return {
          id: apiary.id,
          label: apiary.name,
        }
      });
    },
    resolutionNr() {
      return this.measurementData !== null
          ? parseInt(this.measurementData.resolution.slice(0, -1))
          : null
    },
    resolutionUnit() {
      return this.measurementData !== null
          ? this.measurementData.resolution.slice(-1)
          : null
    },
    mdScreen() {
      return this.$vuetify.breakpoint.width < 960
    },
    screenSize() {
      return this.$vuetify.breakpoint.width < 1300
          ? 'md'
          : this.$vuetify.breakpoint.width > 1900
              ? 'xl'
              : 'lg'
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
    moduloFactor() {
      switch (this.screenSize) {
        case 'md':
          return this.chartCols === 6 ? 2 : this.chartCols === 4 ? 3 : 1
        case 'lg':
          return this.chartCols === 4 ? 3 : 1
        case 'xl':
          return 1
      }
      return 1
    },
    moduloNr() {
      switch (this.interval) {
        case 'hour':
          return 1 * this.moduloFactor
        case 'week':
          if (this.resolutionUnit === 'm' && this.resolutionNr !== null) {
            if (this.resolutionNr < 720) {
              return (360 / this.resolutionNr) * this.moduloFactor
            } else {
              return 1 * this.moduloFactor
            }
          } else {
            return 6 * this.moduloFactor
          }
        case 'month':
          if (this.resolutionUnit === 'm' && this.resolutionNr !== null) {
            return (1440 / this.resolutionNr) * this.moduloFactor
          } else {
            return 8 * this.moduloFactor
          }

        case 'year':
          if (
              this.resolutionUnit === 'd' &&
              this.resolutionNr !== null &&
              this.resolutionNr > 1
          ) {
            return (12 / this.resolutionNr) * this.moduloFactor
          } else {
            return 11 * this.moduloFactor
          }
        case 'day':
          if (this.resolutionUnit === 'm' && this.resolutionNr !== null) {
            if (this.resolutionNr < 60) {
              return (60 / this.resolutionNr) * this.moduloFactor
            } else {
              return 1 * this.moduloFactor
            }
          } else {
            return 6 * this.moduloFactor
          }
      }
      return 6 * this.moduloFactor
    },
  },
  created() {
    this.readTaxonomy();

    if (localStorage.beepChartCols) {
      this.chartCols = parseInt(localStorage.beepChartCols)
    }

    this.preselectedDate = this.$route.query.date || null;
    this.preselectedLocationId = parseInt(this.$route.params.id) || null;
    this.readApiariesAndGroupsIfNotPresent()
      .then(() => {
        if (
          this.preselectedDate !== null
          && this.preselectedDate.length === 10
          && !isNaN(this.preselectedLocationId)
        ) {
          this.selectedLocationId = this.preselectedLocationId;
          this.selectDate(this.preselectedDate);
        } else if (this.apiaries.length > 0) {
          this.setInitialLocationAndLoadData();
        }
      })
      .then(() => {
        return this.readDevicesIfNotPresent();
      })
      .then(() => {
        this.ready = true;
      })
  },
  methods: {
    setPeriodInterval(interval) {
      this.timeIndex = 0
      this.interval = interval
      this.loadData()
    },
    setTimeIndex(offset) {
      this.timeIndex += offset
      this.loadData()
    },
    selectDate(date) {
      const p = this.interval;
      const d = p + 's';

      const selectedMoment = this.$moment(date);
      const currentMoment = this.$moment();
      const periodDiff = currentMoment.diff(selectedMoment, d);

      if (!isNaN(periodDiff)) {
        this.timeIndex = periodDiff
        this.loadData()
      } else {
        console.log('Error selectDate: ' + date)
      }
    },
    onChangedLocation(event) {
      if (event === undefined) {
        this.selectedLocationId = null
        // TODO: Currently not needed
        // this.lastSensorDate = null
        // this.stopTimer()
      } else {
        this.loadData()
      }
    },
    setInitialLocationAndLoadData() {
      if (this.$route.name === 'measurements-apiary-id') {
        this.selectedLocationId = parseInt(this.$route.params.id);
      } else if (this.selectedLocationId === null && this.apiaries.length > 0) {
        this.selectedLocationId = parseInt(this.apiaries[0].id);
      }
      this.loadData();

      return true;
    },
    loadData() {
      this.multiSensorMeasurementRequest(this.interval);
      this.setPeriodTitle();
    },
    setPeriodTitle() {
      var p = this.interval
      var d = p + 's'
      var i = this.timeIndex
      var startTimeFormat = this.timeFormat
      var endTimeFormat = this.timeFormat

      if (p === 'selection') {
        this.periodTitle = this.dateRangeText
        this.periodStart = this.$moment.utc(this.dates[0]) // FIXME: results in previous day if time = 00:00
        this.periodEnd = this.$moment.utc(this.dates[1]) // FIXME: results in previous day if time = 00:00
      } else {
        if (p === 'hour') {
          endTimeFormat = 'HH:mm'
          startTimeFormat += ' ' + endTimeFormat
        } else if (p === 'day') {
          !this.relativeInterval
              ? (endTimeFormat = null)
              : (endTimeFormat = this.timeFormat)
        } else if (p === 'week') {
          !this.relativeInterval ? (p = 'isoweek') : (p = 'week')
        }

        var ep = p

        if (!this.relativeInterval) {
          this.periodStart = this.$moment()
              .subtract(i, d)
              .startOf(p)
          this.periodEnd = this.$moment()
              .subtract(i, d)
              .endOf(ep)
        } else {
          this.periodStart = this.$moment().subtract(i + 1, d)
          this.periodEnd = this.$moment().subtract(i, d)
        }

        var formatStart = this.momentFormat(this.periodStart, startTimeFormat)
        var formatEnd = this.momentFormat(this.periodEnd, endTimeFormat)

        this.periodTitle =
            formatStart + '' + (endTimeFormat !== null ? ' - ' + formatEnd : '')
        this.selectedDate = this.periodStart.format('YYYY-MM-DD')
      }
    },
    calculateTimeIndex(period, date, zoom = false, from = null) {
      var newPeriodIndex = 0
      var todayEnd = this.$moment().endOf(period)
      var endOfPeriod = this.$moment.parseZone(date, this.photoParseFormat)
      var periodDiff = todayEnd.diff(endOfPeriod, period + 's')
      if (!isNaN(periodDiff)) newPeriodIndex = periodDiff
      if (!zoom && period === 'hour') newPeriodIndex -= 12
      if (!zoom && period === 'day')
        from !== 'hour'
            ? this.relativeInterval
                ? (newPeriodIndex -= 4)
                : (newPeriodIndex -= 3)
            : this.relativeInterval
                ? (newPeriodIndex -= 1)
                : (newPeriodIndex -= 0)

      return !isNaN(newPeriodIndex) && newPeriodIndex > 0 ? newPeriodIndex : 0
    },
    
    async multiSensorMeasurementRequest(interval) {
      var start = interval === 'selection' ? this.dates[0] : null
      var end = interval === 'selection' ? this.dates[1] : null
      var timeGroup = interval === 'hour' || interval === 'selection' ? null : interval
      this.noChartData = false;
      this.measurementData = null;
      try {
        const response = await Api.readRequest(
            '/sensors/multi_measurements?id=' + this.selectedLocationId
            + '&interval=' + interval
            + '&index=' + this.timeIndex
            + '&timeGroup=' + timeGroup
            + '&timezone=' + this.timeZone
            + (start !== null ? '&start=' + start + ' 00:00' : '')
            + (end !== null ? '&end=' + end + ' 23:59' : '')
            + '&relative_interval=' + (this.relativeInterval ? '1' : '0')
        );

        this.formatMeasurementData(response.data);

        return true;
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          if (error.response.status === 500) {
            this.noChartData = true;
          }
          if (error.response.status === 404 || error.response.status === 422) {
            this.selectedLocationId = parseInt(this.apiaries[0].id);
            this.$router.push({name: '404', params: { resource: 'location' }});
          }
        } else {
          console.log('Error: ', error);
        }
      }
    },
    /**
     * ['t' => ['eui' => value]]
     * @param measurementData
     */
    formatMeasurementData(measurementData) {
      if (
          !measurementData
          || !measurementData.measurements
          || measurementData.measurements.length === 0
      ) {
        this.noChartData = true;
        return;
      }

      this.measurementData = measurementData;
      this.currentSensors = measurementData.sensors.filter(sensor => this.SENSORS.indexOf(sensor) > -1);
      this.formattedData = {
        sensors: {},
        labels: [],
      };
      let firstDeviceKey = null;

      // Setup array
      this.currentSensors.forEach((sensorName) => {
        this.formattedData.sensors[sensorName] = {};
        Object.keys(measurementData.devicesKeyMapping).forEach((deviceKey) => {
          this.formattedData.sensors[sensorName][deviceKey.toLowerCase()] = [];
        });
      });

      this.measurementData.measurements.map((measurement) => {
          if (firstDeviceKey === null) {
            firstDeviceKey = measurement.key.toLowerCase();
          }
        
          // Labels are first measurement all times
          if (measurement.key.toLowerCase() === firstDeviceKey.toLowerCase()) {
            this.formattedData.labels.push(this.momentFullDateTime(measurement.time));
          }

          this.currentSensors.forEach((sensorName) => {
            this.formattedData.sensors[sensorName][measurement.key.toLowerCase()].push(measurement);
          });
      });

      this.sensorsPresent = false;

    },

    prepareChartData(sensorDeviceValues, sensorKey) {
      /**
       * @type {{series: {color: String, name: String, data: []}[], labels: String[]}}
       */
      const data = {
        labels: this.formattedData.labels,
        series: [],
      };

      // TODO finish this
      Object.keys(sensorDeviceValues)
        .map((deviceKey) => {
          const device = this.getDeviceByKey(deviceKey);
          const series = {
            color: this.SENSOR_COLOR[sensorKey] || 'black',
            name: (device.name || 'Unknown device'),
            data: []
          };

          sensorDeviceValues[deviceKey.toLowerCase()].forEach((measurement) => {
            series.data.push({
              meta: this.momentAll(measurement.time)
                + '<br/>'
                + (device.name || 'Unknown device')
                + ': '
                + (measurement[sensorKey] !== null
                    ? measurement[sensorKey].toFixed(2)
                    : measurement[sensorKey]),
              value: measurement[sensorKey],
            });
          });

          data.series.push(series);
        });

      return data;
    },

    getChartOptions(unit = '', low = false) {
      return {
        fullWidth: true,
        height: low ? '150px' : '220px',
        plugins: [
            this.$chartist.plugins.tooltip({
              class: 'beep-tooltip',
              metaIsHTML: true,
            }),
            this.$chartist.plugins.beep(),
            this.$chartist.plugins.legendBeep({
              simpleToggle: true,
              inactiveByDefault: false
            }),
            this.$chartist.plugins.ctPointLabels({
              labelOffset: {
                x: 7,
                y: 0,
              },
              textAnchor: 'start',
              labelInterpolationFnc(value) {
                if (
                    typeof value !== 'undefined'
                    && (unit === 'kg' || unit === 'mbar')
                ) {
                  return value.toFixed(2) + ' ' + unit;
                } else if (typeof value !== 'undefined') {
                  return value.toFixed(1) + ' ' + unit;
                } else {
                  return '-';
                }
              },
            }),
        ],
        showPoint: true,
        lineSmooth: this.$chartist.Interpolation.simple({
          divisor: 10,
          fillHoles: true,
        }),
        axisX: {
          showGrid: true,
          labelInterpolationFnc: (value, index) => {
            if (index % this.moduloNr === 0) {
              return this.momentFromISO8601(value)
            } else {
              return ''
            }
          },
        }
      }
    },

    updateChartCols(value) {
      this.chartCols = value
      localStorage.beepChartCols = value
    },

    momentAll(date) {
      // automagically converted from utc time to users timezone because moment guesses (and then sets its) timezone in this view
      return this.$moment(date)
          .locale(this.locale)
          .format('llll')
    },
    momentFromISO8601(date) {
      // automagically converted from utc time to users timezone because moment guesses (and then sets its) timezone in this view
      if (this.interval === 'hour') {
        return this.$moment(date)
            .locale(this.locale)
            .format('LT')
      } else if (this.interval === 'day' || this.interval === 'week') {
        var unit = this.locale === 'nl' ? 'u' : 'h'
        return (
            this.$moment(date)
                .locale(this.locale)
                .format('ddd') +
            ' ' +
            this.$moment(date)
                .locale(this.locale)
                .format('H') +
            unit
        )
      } else {
        const currentYear = this.$moment(date).format('YYYY')
        const currentYearEn = ', ' + currentYear
        const currentYearEsPt = ' de ' + currentYear
        const currentYearNl = '. ' + currentYear
        return this.$moment(date)
            .locale(this.locale)
            .format('ll')
            .replace(currentYearNl, '')
            .replace(currentYearEn, '')
            .replace(currentYearEsPt, '')
            .replace(' ' + currentYear, '') // Remove year hardcoded per language, currently no other way to get rid of year whilst keeping localized time
      }
    },

    getDeviceByKey(deviceKey) {
      return this.devices.filter((device) => device.key.toLowerCase() === deviceKey.toLowerCase()).pop();
    },

    checkDateOrder(dates) {
      if (dates[1] < dates[0]) {
        this.dates = [dates[1], dates[0]]
      }
    },

    invalidDates(dates) {
      return (
          (dates.length === 2 && dates[0] > dates[1]) ||
          dates[0] === dates[1] ||
          dates.length === 1
      )
    },
  },
}
</script>

<style scoped lang="scss">

.period-bar-wrapper {
  position: fixed;
  top: 100px;
  z-index: 1;
  width: 100%;
  margin-top: -4px;
  background-color: $color-orange-light;
  border-bottom: 1px solid #fff5e2;
  .period-container {
    padding-right: 80px;
    padding-left: 80px;
    @include for-phone-only {
      padding: 10px;
    }
  }
  .period-bar {
    margin-top: -10px;
    margin-bottom: -10px;
    @include for-tablet-portrait-up {
      margin-top: -12px;
      margin-bottom: -12px;
    }
  }
}

// TODO: Maybe move to unified scss?
.period-title {
  margin-top: 1px;
  margin-left: 2px;
  font-family: 'Roboto', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1666666667em !important;
  @include for-phone-only {
    margin-top: 0;
    margin-left: 1px;
    font-size: 14px !important;
    letter-spacing: 0.15em !important;
  }
}

::v-deep .charts {
  svg.ct-chart-bar,
  svg.ct-chart-line {
    overflow: visible;
  }
  .ct-grid.ct-horizontal:first-child,
  .ct-grid.ct-horizontal + .ct-grid.ct-vertical {
    stroke: $color-grey;
  }
  .ct-label {
    color: $color-grey-dark;
  }
  text.ct-label {
    fill: $color-grey-dark;
  }
  .ct-label.ct-label.ct-horizontal.ct-end {
    position: relative;
    justify-content: flex-end;
    text-align: right;
    white-space: nowrap;
    transform: translate(-100%) rotate(-45deg);
    transform-origin: 100% 0;
  }
  .ct-label.ct-vertical.ct-end {
    margin-left: -5px;
  }
  .ct-chart {
    &.modulo-2 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(2n + 1)) {
      stroke: none !important;
    }
    &.modulo-3 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(3n + 1)) {
      stroke: none !important;
    }
    &.modulo-4 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(4n + 1)) {
      stroke: none !important;
    }
    &.modulo-6 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(6n + 1)) {
      stroke: none !important;
    }
    &.modulo-8 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(8n + 1)) {
      stroke: none !important;
    }
    &.modulo-9 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(9n + 1)) {
      stroke: none !important;
    }
    &.modulo-11 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(11n + 1)) {
      stroke: none !important;
    }
    &.modulo-12 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(12n + 1)) {
      stroke: none !important;
    }
    &.modulo-16 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(16n + 1)) {
      stroke: none !important;
    }
    &.modulo-18 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(18n + 1)) {
      stroke: none !important;
    }
    &.modulo-22 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(22n + 1)) {
      stroke: none !important;
    }
    &.modulo-24 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(24n + 1)) {
      stroke: none !important;
    }
    &.modulo-33 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(33n + 1)) {
      stroke: none !important;
    }
    &.modulo-36 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(36n + 1)) {
      stroke: none !important;
    }
    &.modulo-60 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(60n + 1)) {
      stroke: none !important;
    }
    &.modulo-120 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(120n + 1)) {
      stroke: none !important;
    }
    &.modulo-180 .ct-grids .ct-grid.ct-horizontal:not(:nth-child(180n + 1)) {
      stroke: none !important;
    }
  }

  .ct-series {
    .ct-point {
      stroke-width: 6px !important;
      @include for-phone-only {
        stroke-width: 4px !important;
      }
    }
    .ct-line {
      @include for-phone-only {
        stroke-width: 3px !important;
      }
    }
    .ct-label:not(:last-child) {
      display: none;
    }
  }
  .ct-labels {
    .ct-label.ct-horizontal.ct-end {
      font-size: 0.7rem !important;
      @include for-phone-only {
        font-size: 0.6rem !important;
      }
    }
  }
  .ct-legend {
    position: relative !important;
    text-align: center;
    list-style: none;

    li {
      position: relative !important;
      display: inline-block;
      padding-left: 23px !important;
      margin-right: 10px;
      margin-bottom: 3px;
      cursor: pointer;
      &.ct-legend--no-pointer {
        cursor: auto;
      }
    }

    li .ct-legend-square {
      position: absolute !important;
      top: 3px !important;
      left: 0 !important;
      width: 15px !important;
      height: 15px !important;
      content: '' !important;
      border: 3px solid transparent;
      border-radius: 2px !important;
    }

    li.inactive .ct-legend-square {
      background: transparent !important;
    }

    &.ct-legend-inside {
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
    }

    .ct-legend-inside li {
      display: block;
      margin: 0;
    }
  }
}

.measurements-card-title {
  line-height: 1.5rem !important;
  &.measurements-card-title--border-bottom {
    border-bottom: 1px solid $color-grey-light;
  }
}

.measurements-content {
  margin-top: 40px;
  @media (max-width: 374px) {
    margin-top: 65px;
  }
}
</style>

<style lang="scss">
.beep-tooltip {
  font-family: 'Roboto', sans-serif !important;
  font-size: 0.8rem;
  font-weight: 500 !important;
  color: $color-grey-dark !important;
  background-color: rgba(255, 160, 0, 0.87) !important;
  border-radius: 4px;
  &::before {
    margin-left: -5px !important;
    border: 5px solid transparent !important;
    border-top-color: rgba(255, 160, 0, 0.87) !important;
  }
}

.chartist-tooltip-value {
  display: none !important;
}
</style>