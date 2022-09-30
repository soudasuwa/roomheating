/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuthToken {
  /** Token to be used in further requests */
  access_token?: string

  /**
   * Token type. Only bearer type is supported
   * @example bearer
   */
  token_type?: string

  /** TTL in seconds */
  expires_in?: number
}

export interface UserProfileFields {
  name: string

  /** @format email */
  email: string

  /**
   * @format timezone
   * @example UTC
   */
  timezone: string
  phone?: string
  telegram?: string
  skype?: string
  company_info?: string
}

export type UserProfile = { login: string } & UserProfileFields

export interface Account {
  user_id?: number

  /** @example 8d88e0a9-98c0-49d3-b7bb-606d28624faf */
  tracking_id?: string
  profile?: UserProfile
  email_confirmed?: boolean

  /** Balance */
  balance?: number

  /** Minimum deposit amount to get 30% bonus */
  min_deposit_amount?: number

  /** Reward in % from referrer payments */
  referral_reward?: number

  /** Amount of users who were registered as current user's referral */
  referrers_count?: number

  /** Amount of workers that were created as current user's referral */
  referrer_workers_count?: number

  /** Referral promocode */
  promocode?: string

  /** Only accounts older than 14 days can set promocode */
  can_set_promocode?: boolean

  /** Indicates that Two Factor Authentication (2FA) is enabled for this account */
  "2fa_enabled"?: boolean
  whitelist_ips?: string[]

  /**
   * Current IP address
   * @example 1.1.1.1
   */
  ip?: string

  /** Recently executed custom commands (via exec). Maximum 10 unique commands are stored. */
  recent_commands?: string[]

  /** Farms list */
  farms?: FarmShortInfoAccount[]

  /** Meta data keyed by namespace */
  meta?: object
}

export interface UserShortInfo {
  /**
   * User ID
   * @example 12345
   */
  id?: number

  /**
   * User login
   * @example john.doe
   */
  login?: string

  /**
   * User full name
   * @example John Doe
   */
  name?: string

  /**
   * Is me
   * @example false
   */
  me?: boolean
}

export interface FarmFields {
  /**
   * Display name
   * @example Test farm
   */
  name?: string

  /**
   * Time zone for all farm workers. Default is account's time zone.
   * @format timezone
   * @example UTC
   */
  timezone?: string

  /**
   * Red Temperature for GPU workers, °C
   * @example 72
   */
  gpu_red_temp?: number

  /**
   * Red Temperature for ASIC workers, °C
   * @example 72
   */
  asic_red_temp?: number

  /**
   * Red Board Temperature for ASIC workers, °C
   * @example 72
   */
  asic_red_board_temp?: number

  /**
   * Red memory temperature for GPU workers, °C
   * @example 60
   */
  gpu_red_mem_temp?: number

  /**
   * Red CPU temperature for GPU workers, °C
   * @example 60
   */
  gpu_red_cpu_temp?: number

  /**
   * Red Fan speed for GPU workers, %
   * @example 90
   */
  gpu_red_fan?: number

  /**
   * Red Fan speed for ASIC workers, %
   * @example 90
   */
  asic_red_fan?: number

  /**
   * Red Accepted Shares Ratio for GPU workers, %
   * @example 85
   */
  gpu_red_asr?: number

  /**
   * Red Accepted Shares Ratio for ASIC workers, %
   * @example 85
   */
  asic_red_asr?: number

  /**
   * Red Load Average per one CPU core for GPU workers
   * @example 1.8
   */
  gpu_red_la?: number

  /**
   * Red Load Average per one CPU core for ASIC workers
   * @example 1.8
   */
  asic_red_la?: number

  /** Package repository URL list. Use this to override default list. */
  repo_urls?: string[]

  /**
   * Electricity price per kilowatt hour
   * @example 0.1
   */
  power_price?: number

  /**
   * Currency of electricity price
   * @example $
   */
  power_price_currency?: string

  /** Enable charging on brand pool */
  charge_on_pool?: boolean

  /**
   * Template new worker names.
   *
   * Supported fields:
   *   - id: worker id
   *   - uid: worker uuid
   *   - platform: name of platform (worker, rig, asic, device)
   *   - mac: device mac address
   * Supported functions:
   *   - uppercase: change text to upper case
   *   - lowercase: change text to lower case
   *   - replace(search, replace): replace search text to other text
   *   - limit(size): text limit
   *   - addAfter(value): add value after var
   *   - addBefore(value): add value before var
   *   - substring(offset, ?limit): get part of string, arguments support negative values, limit is not required
   * Template can be checked via `/string_templates/test/worker_name` endpoint.
   * @example {{ rig_id }}-{{ uid|limit(5) }}-{{ platform|uppercase }}-{{ mac|replace(':', ',') }}
   */
  worker_name_template?: string
}

export type Farm = { id?: number } & FarmFields &
  FarmAutocreateHash &
  FarmNonfree &
  FarmProps &
  FarmRole &
  FarmWorkersCounts &
  FarmMoney &
  FarmStatsField &
  FarmHashrates &
  TagIds &
  PowerDrawSettings &
  FarmAutoTags &
  FarmDefaultFS

export type FarmListItem = Farm

export type FarmCreateRequest = FarmFields &
  FarmNonfree &
  TagIds &
  PowerDrawSettings &
  FarmAutoTags &
  FarmDefaultFS

export type FarmUpdateRequest = FarmFields &
  FarmNonfree &
  TagIdsEdit &
  PowerDrawSettings &
  FarmAutoTags &
  FarmDefaultFS

export interface FarmShortInfo {
  /** @example 12345 */
  id?: number

  /** @example Test farm */
  name?: string
}

export interface FarmRole {
  /** Access role */
  role?: AccessRoleEnum
}

export interface FarmWorkersCounts {
  /**
   * Total amount of workers in farm
   * @example 10
   */
  workers_count?: number

  /**
   * Total amount of Rigs in farm
   * @example 6
   */
  rigs_count?: number

  /**
   * Total amount of ASICs in farm
   * @example 4
   */
  asics_count?: number

  /**
   * Amount of disabled Rigs in farm
   * @example 1
   */
  disabled_rigs_count?: number

  /**
   * Amount of disabled ASICs in farm
   * @example 2
   */
  disabled_asics_count?: number
}

export type FarmShortInfoAccount = FarmShortInfo & FarmWorkersCounts & FarmRole

export interface FarmAutocreateHash {
  /**
   * Unique ID to be used for connecting new workers to the farm
   * @example 3bf6d003a4a10903bcb6a6f9310bc35c780808ad
   */
  autocreate_hash?: string
}

export interface FarmProps {
  /**
   * Farm is locked due to exceeding overdraft limit
   * @example false
   */
  locked?: boolean

  /** 2FA is required for update operations (if not owner) */
  twofa_required?: boolean

  /** Farm is trusted (if not owner) */
  trusted?: boolean

  /** Who owns the farm */
  owner?: UserShortInfo

  /** Who pays for the farm. If not set - owner is the payer. */
  payer?: UserShortInfo

  /** Personal settings for current user */
  personal_settings?: FarmPersonalSettings
}

export interface FarmNonfree {
  /**
   * Paid features state
   * @example true
   */
  nonfree?: boolean
}

export interface FarmAutoTags {
  /**
   * Auto-tags feature.
   * If enabled - all workers inside the farm are automatically tagged.
   * Rigs are tagged by GPU information such as model name, memory size, OEM, etc.
   * ASICs are tagged by model name.
   *
   * @example true
   */
  auto_tags?: boolean
}

export interface FarmDefaultFS {
  /**
   * Default flight sheets keyed by platform (1 - rig, 2 - asic).
   * These flight sheets will be automatically attached to newly created workers.
   *
   * @example {"1":12233,"2":12244}
   */
  default_fs?: Record<string, number>
}

export interface FarmMoney {
  money?: {
    is_paid?: boolean
    is_free?: boolean
    balance?: number
    discount?: number
    monthly_cost?: number
    daily_cost?: number
    cost_details?: FarmMoneyCostItem[]
    days_left?: number
    overdraft?: boolean
    overdraft_days_left?: number
  }
}

export interface FarmMoneyCostItem {
  /**
   * Billing type:
   * * 11 - Rigs general
   * * 12 - Rigs that mine on hiveon pool
   * * 13 - Rigs that mine hiveon coins on other pools
   * * 21 - ASICs general
   * * 22 - ASICs with Hive firmware
   *
   */
  type?: BillingType

  /** Display name of billing type */
  type_name?: string

  /**
   * Amount of used workers of this billing type per day
   * @example 1.23
   */
  amount?: number

  /**
   * Monthly price of this billing type
   * @example 3
   */
  monthly_price?: number

  /**
   * Monthly cost of this amount of workers
   * @example 3.69
   */
  monthly_cost?: number

  /**
   * Daily cost (monthly cost divided by days in month)
   * @example 0.123
   */
  daily_cost?: number
}

export interface FarmStatsField {
  stats?: FarmStats
}

export interface FarmStats {
  /**
   * Total amount of workers
   * @example 10
   */
  workers_total?: number

  /**
   * Amount of online workers
   * @example 8
   */
  workers_online?: number

  /**
   * Amount of offline workers
   * @example 2
   */
  workers_offline?: number

  /**
   * Amount of overheated workers (GPUs/boards exceeds red value)
   * @example 1
   */
  workers_overheated?: number

  /**
   * Amount of workers that have units without temp
   * @example 1
   */
  workers_no_temp?: number

  /**
   * Amount of overloaded workers (15m CPU load average exceeds red value)
   * @example 1
   */
  workers_overloaded?: number

  /**
   * Amount of workers with invalid shares
   * @example 1
   */
  workers_invalid?: number

  /**
   * Amount of workers with low Accepted Shares Ratio (ASR is below red value)
   * @example 1
   */
  workers_low_asr?: number

  /**
   * Amount of workers without hashrate
   * @example 1
   */
  workers_no_hashrate?: number

  /**
   * Total amount of Rigs
   * @example 5
   */
  rigs_total?: number

  /**
   * Amount of online Rigs
   * @example 4
   */
  rigs_online?: number

  /**
   * Amount of offline Rigs
   * @example 1
   */
  rigs_offline?: number

  /**
   * Total power draw of all Rigs, watts
   * @example 3956
   */
  rigs_power?: number

  /**
   * Total amount of GPUs
   * @example 32
   */
  gpus_total?: number

  /**
   * Amount of online GPUs
   * @example 24
   */
  gpus_online?: number

  /**
   * Amount of offline GPUs
   * @example 8
   */
  gpus_offline?: number

  /**
   * Amount of overheated GPUs
   * @example 3
   */
  gpus_overheated?: number

  /**
   * Amount of GPUs that does not report temperature
   * @example 1
   */
  gpus_no_temp?: number

  /**
   * Total amount of ASICs
   * @example 5
   */
  asics_total?: number

  /**
   * Amount of online ASICs
   * @example 4
   */
  asics_online?: number

  /**
   * Total power draw of all ASICs, watts
   * @example 576
   */
  asics_power?: number

  /**
   * Amount of offline ASICs
   * @example 1
   */
  asics_offline?: number

  /**
   * Total amount of ASIC boards
   * @example 15
   */
  boards_total?: number

  /**
   * Amount of online ASIC boards
   * @example 12
   */
  boards_online?: number

  /**
   * Amount of offline ASIC boards
   * @example 3
   */
  boards_offline?: number

  /**
   * Amount of overheated ASIC boards
   * @example 0
   */
  boards_overheated?: number

  /**
   * Amount of ASIC boards that does not report temperature
   * @example 1
   */
  boards_no_temp?: number

  /**
   * Amount of online CPUs
   * @example 0
   */
  cpus_online?: number

  /**
   * Total amount of Devices
   * @example 5
   */
  devices_total?: number

  /**
   * Amount of online Devices
   * @example 4
   */
  devices_online?: number

  /**
   * Amount of offline Devices
   * @example 1
   */
  devices_offline?: number

  /**
   * Total power draw of all workers, watts
   * @example 4532
   */
  power_draw?: number

  /**
   * Consuming electricity cost per hour (in configured currency)
   * @example 0.45
   */
  power_cost?: number

  /**
   * Accepted Shares Ratio, %
   * Calculated as: `accepted_shares / total_shares * 100`
   *
   * @example 99.9
   */
  asr?: number
}

/**
 * Summary hashrates per algorithm
 */
export interface FarmHashrates {
  hashrates?: { algo?: AlgoName; hashrate?: number }[]

  /** Summary hashrates per coin */
  hashrates_by_coin?: {
    coin?: CoinSymbol
    algo?: AlgoName
    hashrate?: number
  }[]
}

export interface FarmMetric {
  /**
   * @format timestamp
   * @example 1526342689
   */
  time?: number

  /**
   * Rigs online
   * @example 4
   */
  rigs?: number

  /**
   * GPUs online
   * @example 10
   */
  gpus?: number

  /**
   * ASICs online
   * @example 6
   */
  asics?: number

  /**
   * ASIC boards online
   * @example 28
   */
  boards?: number

  /**
   * Total power consumption of all workers, watts
   * @example 7675
   */
  power?: number

  /**
   * Total power consumption of all Rigs, watts
   * @example 6780
   */
  rigs_power?: number

  /**
   * Total power consumption of all ASICs, watts
   * @example 895
   */
  asics_power?: number

  /**
   * Hashrates by algorithm
   * @example [{"algo":"athash","hashrate":968978000},{"algo":"sha256","hashrate":41975600056750}]
   */
  hashrates?: { algo?: AlgoName; value?: number }[]
}

export interface FarmConfigFiles {
  /** rig.conf file contents */
  "rig.conf"?: string
}

export interface FarmPersonalSettings {
  /** Is favorite flag */
  is_favorite?: boolean

  /** Personal note for the farm */
  note?: string
}

export interface WorkerFields {
  /**
   * Worker platform:
   * * 1 - GPU
   * * 2 - ASIC
   * * 3 - Device
   *
   */
  platform?: Platform

  /**
   * Display name
   * @example Test worker
   */
  name?: string
  description?: string

  /**
   * @min 1
   * @example 3
   */
  units_count?: number
}

export interface WorkerPassword {
  /** @format password, alpha-numeric */
  password?: string
}

export interface WorkerActive {
  active?: boolean
}

export type Worker = { id?: number } & FarmId &
  WorkerFields &
  WorkerActive &
  WorkerPassword &
  TagIds &
  WorkerMirrorUrl &
  WorkerRepoUrls &
  WorkerRedValues &
  WorkerProps &
  WorkerVersions &
  WorkerFS &
  WorkerOverclock &
  WorkerOCId &
  WorkerOCConfig &
  WorkerOCAlgoActual &
  WorkerOCAlgoResolved &
  WorkerMinersConfig &
  WorkerTunedMiners &
  WorkerWatchdog &
  WorkerOptions &
  PowerDrawSettings &
  WorkerAutofan &
  WorkerStats &
  WorkerMinersSummary &
  WorkerMinersStats &
  WorkerGpuStatsSummary &
  WorkerGpuInfo &
  WorkerGpuStats &
  WorkerHardwareInfo &
  WorkerHardwareStats &
  WorkerAsicInfo &
  WorkerAsicStats &
  WorkerOctofan &
  WorkerOctofanStats &
  WorkerCoolbox &
  WorkerCoolboxInfo &
  WorkerCoolboxStats &
  WorkerFanflap &
  WorkerFanflapStats &
  WorkerPowermeter &
  WorkerPowermeterStats &
  WorkerDonnagerRelay &
  WorkerDonnagerRelayInfo &
  WorkerDonnagerRelayStats &
  WorkerYkedaAutofan &
  WorkerYkedaAutofanInfo &
  WorkerYkedaAutofanStats &
  WorkerWindtankAutofan &
  WorkerWindtankAutofanInfo &
  WorkerWindtankAutofanStats &
  WorkerMknetAutofan &
  WorkerMknetAutofanInfo &
  WorkerMknetAutofanStats &
  WorkerMessages &
  WorkerCommands &
  WorkerBenchmark &
  WorkerAsicConfig

export interface WorkerMessagesCount {
  messages_counts?: {
    success?: number
    danger?: number
    warning?: number
    info?: number
    default?: number
    file?: number
  }
}

export type WorkerListItem = { id?: number } & WorkerFields &
  WorkerActive &
  WorkerPassword &
  TagIds &
  WorkerMirrorUrl &
  WorkerRepoUrls &
  WorkerRedValues &
  WorkerProps &
  WorkerVersions &
  WorkerStats &
  WorkerFS &
  WorkerOverclock &
  WorkerTunedMiners &
  WorkerMinersSummary &
  WorkerMinersStats &
  WorkerHardwareInfo &
  WorkerHardwareStats &
  WorkerGpuStatsSummary &
  WorkerGpuInfo &
  WorkerGpuStats &
  WorkerAsicInfo &
  WorkerAsicStats &
  WorkerWatchdog &
  WorkerOptions &
  PowerDrawSettings &
  WorkerAutofan &
  WorkerOctofan &
  WorkerOctofanStats &
  WorkerCoolbox &
  WorkerCoolboxInfo &
  WorkerCoolboxStats &
  WorkerFanflap &
  WorkerFanflapStats &
  WorkerPowermeter &
  WorkerPowermeterStats &
  WorkerDonnagerRelay &
  WorkerDonnagerRelayInfo &
  WorkerDonnagerRelayStats &
  WorkerYkedaAutofan &
  WorkerYkedaAutofanInfo &
  WorkerYkedaAutofanStats &
  WorkerWindtankAutofan &
  WorkerWindtankAutofanInfo &
  WorkerWindtankAutofanStats &
  WorkerMknetAutofan &
  WorkerMknetAutofanInfo &
  WorkerMknetAutofanStats &
  WorkerCommands &
  WorkerBenchmark &
  WorkerAsicConfig &
  WorkerMessagesCount

export type WorkerCreateRequest = WorkerFields &
  WorkerActive &
  WorkerPassword &
  TagIds &
  WorkerMirrorUrl &
  WorkerRepoUrls &
  WorkerEditVpn &
  WorkerEditFS &
  WorkerEditOC &
  WorkerMinersConfig &
  WorkerWatchdog &
  WorkerOptions &
  PowerDrawSettings &
  WorkerAutofan &
  WorkerOctofan &
  WorkerCoolbox &
  WorkerFanflap &
  WorkerPowermeter &
  WorkerDonnagerRelay &
  WorkerYkedaAutofan &
  WorkerWindtankAutofan &
  WorkerMknetAutofan &
  WorkerAsicConfig

export type WorkerEditRequest = WorkerFields &
  WorkerActive &
  TagIdsEdit &
  WorkerMirrorUrl &
  WorkerRepoUrls &
  WorkerEditVpn &
  WorkerEditFS &
  WorkerEditOC &
  WorkerMinersConfig &
  WorkerWatchdog &
  WorkerOptions &
  PowerDrawSettings &
  WorkerAutofan &
  WorkerOctofan &
  WorkerCoolbox &
  WorkerFanflap &
  WorkerPowermeter &
  WorkerDonnagerRelay &
  WorkerYkedaAutofan &
  WorkerWindtankAutofan &
  WorkerMknetAutofan &
  WorkerAsicConfig

export type WorkerMultiEditRequest = WorkerActive &
  WorkerEditFS &
  WorkerEditOC &
  TagIdsEdit &
  WorkerMirrorUrl &
  WorkerRepoUrls &
  WorkerMinersConfig &
  WorkerWatchdog &
  WorkerOptions &
  PowerDrawSettings &
  WorkerAutofan &
  WorkerOctofan &
  WorkerCoolbox &
  WorkerFanflap &
  WorkerPowermeter &
  WorkerYkedaAutofan &
  WorkerWindtankAutofan &
  WorkerMknetAutofan &
  WorkerAsicConfig

export type WorkerUpdatedResponse = WorkerCommands

export type WorkerShortInfo = {
  id?: number
  farm_id?: number
  platform?: Platform
  name?: string
  description?: string
} & WorkerIpAddresses

export interface WorkerMirrorUrl {
  mirror_url?: MirrorUrl
}

export interface WorkerRepoUrls {
  repo_urls?: RepoUrl[]
}

export interface WorkerRedValues {
  /**
   * Red Temperature, °C
   * @example 72
   */
  red_temp?: number

  /**
   * Red memory temperature (for rigs), °C
   * @example 60
   */
  red_mem_temp?: number

  /**
   * Red CPU temperature (for rigs), °C
   * @example 60
   */
  red_cpu_temp?: number

  /**
   * Red Board Temperature (for ASICs), °C
   * @example 60
   */
  red_board_temp?: number

  /**
   * Red Fan speed, %
   * @example 90
   */
  red_fan?: number

  /**
   * Red Accepted Shares Ratio, %
   * @example 85
   */
  red_asr?: number

  /**
   * Red Load Average per one CPU core
   * @example 1.8
   */
  red_la?: number

  /** Red hashrates per algo */
  red_hashrates?: { algo?: AlgoName; hashrate?: number }[]
}

export interface WorkerIpAddresses {
  /**
   * List of assigned ip addresses
   * @example ["192.168.0.105","10.8.0.5"]
   */
  ip_addresses?: string[]
}

export interface WorkerRemoteAddress {
  /** Remote address info */
  remote_address?: { ip?: string; hostname?: string }
}

export type WorkerProps = WorkerIpAddresses &
  WorkerRemoteAddress & {
    vpn?: boolean
    has_amd?: boolean
    has_nvidia?: boolean
    needs_upgrade?: boolean
    packages_hash?: string
    lan_config?: {
      dhcp?: boolean
      address?: string
      gateway?: string
      dns?: string
    }
    system_type?: "linux" | "asic" | "windows"
    os_name?: string
    has_octofan?: boolean
    has_coolbox?: boolean
    has_fanflap?: boolean
    has_powermeter?: boolean
    has_asichub?: boolean
    has_donnager_relay?: boolean
    has_ykeda_autofan?: boolean
    has_windtank_autofan?: boolean
    has_mknet_autofan?: boolean
    personal_settings?: FarmPersonalSettings
  }

export interface WorkerVersions {
  versions?: {
    hive?: string
    kernel?: string
    amd_driver?: string
    nvidia_driver?: string
  }
}

export interface WorkerOCConfig {
  /** Overclocking profile configuration */
  oc_config?: OCConfig

  /**
   * Algorithm name. Overclock configuration for this algo will be applied.
   * If not set - algo will be automatically resolved based on first applied flight sheet
   *
   */
  oc_algo?: OCAlgo
}

export interface WorkerOCId {
  /** ID of recently applied Overclocking profile */
  oc_id?: number
}

export interface WorkerOverclock {
  /** Actually applied overclock */
  overclock?: { algo?: string } & OCProps
}

export interface WorkerOCAlgoActual {
  /**
   * Actual algorithm name for which overclock is applied.
   * It is either manually defined or automatically resolved.
   *
   * @example ethash
   */
  oc_algo_actual?: string
}

export interface WorkerOCAlgoResolved {
  /**
   * Resolved overclock algorithm name based on applied flight sheet and tuning.
   * This property just indicates which overclock should be applied. See "oc_algo_actual" for which is actually applied.
   *
   * @example ethash
   */
  oc_algo_resolved?: string
}

export type WorkerEditPassword = WorkerPassword & {
  password_update_mode?: 1 | 2
}

export interface WorkerEditVpn {
  /**
   * VPN configuration
   *
   * Files will be named as following, so certificates in client.conf should
   * be named ca.crt, client.crt, client.key.
   * Also you can embed certificates in client.conf and upload just one file.
   */
  vpn?: {
    clientconf: string
    cacrt?: string
    clientcrt?: string
    clientkey?: string
    login?: string
    password?: string
  }
}

export interface WorkerEditFS {
  /** Flight sheet ID */
  fs_id?: number
}

export type WorkerEditOC = WorkerEditOCId & WorkerEditOCMode & WorkerOCConfig

export interface WorkerEditOCId {
  /** Overclocking profile ID */
  oc_id?: number
}

export interface WorkerEditOCMode {
  /**
   * How to apply overclocking profile:
   * - When applying profile via `oc_id`
   *   - replace - copy entire per-brand configurations of both default and per-algo sets
   *   - merge - copy only individual fields of per-brand configurations of both default and per-algo sets
   * - When applying config via `oc_config`
   *   - replace - full replace the oc_config field in worker with one from request
   *   - merge - update individual fields in worker's oc_config
   *
   */
  oc_apply_mode?: "replace" | "merge"
}

export interface WorkerFS {
  flight_sheet?: FSMidInfo
}

export interface WorkerStats {
  /** Worker stats */
  stats?: {
    online?: boolean
    boot_time?: number
    stats_time?: number
    miner_start_time?: number
    gpus_online?: number
    gpus_offline?: number
    gpus_overheated?: number
    cpus_offline?: number
    boards_online?: number
    boards_offline?: number
    boards_overheated?: number
    power_draw?: number
    overheated?: boolean
    overloaded?: boolean
    invalid?: boolean
    low_asr?: boolean
    problems?: Problem[]
    avg_hashrates?: any
  }
}

export interface WorkerMinersSummary {
  miners_summary?: {
    hashrates?: {
      miner?: MinerName
      ver?: string
      algo?: AlgoName
      coin?: CoinSymbol
      hash?: number
      dalgo?: DAlgoName
      dcoin?: DCoinSymbol
      dhash?: number
      shares?: {
        accepted?: number
        rejected?: number
        invalid?: number
        ratio?: number
      }
    }[]
  }
}

export interface WorkerMinersStats {
  miners_stats?: {
    hashrates?: {
      miner?: MinerName
      algo?: AlgoName
      coin?: CoinSymbol
      hashes?: number[]
      dalgo?: DAlgoName
      dcoin?: DCoinSymbol
      dhashes?: number[]
      temps?: number[]
      fans?: number[]
      invalid_shares?: number[]
      bus_numbers?: number[]
      dbus_numbers?: number[]
    }[]
  }
}

export interface WorkerHardwareInfo {
  /** Hardware information */
  hardware_info?: {
    motherboard?: { manufacturer?: string; model?: string; bios?: string }
    cpu?: { id?: string; model?: string; cores?: number; aes?: boolean }
    disk?: { model?: string }
    net_interfaces?: { iface?: string; mac?: string }[]
  }
}

export interface WorkerHardwareStats {
  /** Hardware stats */
  hardware_stats?: {
    df?: string
    cpuavg?: number[]
    cputemp?: number[]
    cpu_cores?: number
    memory?: { total?: number; free?: number }
  }
}

export interface WorkerAsicInfo {
  /** ASIC information */
  asic_info?: {
    model?: string
    short_name?: string
    logic_version?: string
    firmware?: string
    hiveon?: boolean
  }

  /** ID of AsicHUB which manages this ASIC */
  asichub_id?: number
}

export interface WorkerAsicStats {
  /** ASIC stats */
  asic_stats?: {
    fans?: { index?: number; fan?: number; fan_rpm?: number }[]
    fans_count?: number
    boards?: {
      chain?: number
      acn?: number
      freq?: number
      status?: (0 | 1 | 2)[]
      temp?: number
      board_temp?: number
      hw_errors?: number
      power?: number
      chain_voltage?: number
    }[]
    asicboost?: boolean
  }
}

export interface WorkerGpuInfo {
  /** GPU information */
  gpu_info?: GpuInfo[]
}

export interface WorkerGpuStatsSummary {
  /** GPU summary stats */
  gpu_summary?: {
    gpus?: { name?: string; amount?: number }[]
    max_temp?: number
    max_fan?: number
  }
}

export interface WorkerGpuStats {
  /** GPU stats */
  gpu_stats?: ({ bus_number?: number } & GpuStats)[]
}

export interface WorkerMessages {
  /** Worker messages */
  messages?: WorkerMessage[]
}

export interface WorkerCommands {
  /** Worker queue commands */
  commands?: { command?: string; id?: number; data?: object }[]
}

export interface WorkerBenchmark {
  /** ID of currently running benchmark. This field is present until the benchmark is finished. */
  benchmark_id?: number
}

export interface WorkerMessage {
  id?: number

  /** @example Config applied */
  title?: string
  type?: MessageType

  /**
   * @format timestamp
   * @example 1525899600
   */
  time?: number

  /** Command ID for which this message is related to */
  cmd_id?: number

  /**
   * Command name for which this message is related to
   * @example amd_upload
   */
  command?: string

  /** Result of executed command */
  command_result?: object

  /** @example true */
  has_payload?: boolean
}

export type WorkerMessageFull = WorkerMessage & { payload?: string }

/**
 * @example success
 */
export enum MessageType {
  Success = "success",
  Info = "info",
  File = "file",
  Warning = "warning",
  Danger = "danger",
}

export interface WorkerMinersConfig {
  /** Miners configuration */
  miners_config?: MinersConfig
}

export interface WorkerTunedMiners {
  /** List of miner names from active flight sheet that are tuned in this worker. */
  tuned_miners?: MinerName[]
}

export interface WorkerWatchdog {
  /** Watchdog system */
  watchdog?: {
    enabled: boolean
    restart_timeout: number
    reboot_timeout: number
    check_power?: boolean
    check_connection?: boolean
    min_power?: number
    max_power?: number
    power_action?: "reboot" | "shutdown"
    check_gpu?: boolean
    max_la?: number
    min_asr?: number
    share_time?: number
    options?: {
      miner: MinerName
      minhash: number
      units?: "k" | "M" | "G" | "T" | "P"
    }[]
  }
}

export interface WorkerOptions {
  /**
   * Worker options.
   * This object will be merged with existing one on update.
   *
   */
  options?: {
    disable_gui?: boolean
    maintenance_mode?: 0 | 1 | 2
    push_interval?: number
    miner_delay?: number
    doh?: 0 | 1 | 2
    power_cycle?: boolean
    shellinabox_enable?: boolean
    ssh_enable?: boolean
    ssh_password_enable?: boolean
    ssh_authorized_keys?: string
    vnc_enable?: boolean
    vnc_password?: string
  }
}

export interface WorkerAutofan {
  /** Autofan configuration */
  autofan?: {
    enabled: boolean
    target_temp: number
    target_mem_temp?: number
    min_fan: number
    max_fan: number
    critical_temp?: number
    critical_temp_action?: "reboot" | "shutdown"
    no_amd?: boolean
    reboot_on_errors?: boolean
    smart_mode?: boolean
  }
}

export interface WorkerOctofan {
  /** Configuration for Octominer fan controller */
  octofan?: {
    fan?: number
    auto?: boolean
    target_temp?: number
    target_mem_temp?: number
    min_fan?: number
    max_fan?: number
    blink_on_errors?: boolean
    blink_to_find?: boolean
    fan1_max_rpm?: number
    fan2_max_rpm?: number
    fan3_max_rpm?: number
    fan1_port?: number
    fan2_port?: number
    fan3_port?: number
  }
}

export interface WorkerOctofanStats {
  /** Octominer's fan controller stats */
  octofan_stats?: { casefan?: number[]; thermosensors?: number[] }
}

export interface WorkerCoolbox {
  /** Configuration for Coolbox fan controller */
  coolbox?: {
    fan?: number
    auto?: boolean
    target_temp?: number
    target_mem_temp?: number
    wd_enabled?: boolean
    wd_interval?: number
  }
}

export interface WorkerCoolboxInfo {
  /** Information about installed Coolbox fan controller */
  coolbox_info?: { version?: "L" | "P"; revision?: string }
}

export interface WorkerCoolboxStats {
  /** Coolbox fan controller stats */
  coolbox_stats?: { casefan?: number[]; thermosensors?: number[] }
}

export interface WorkerFanflap {
  /** Configuration for FanFlap controller */
  fanflap?: {
    fan?: number
    auto?: boolean
    target_temp?: number
    min_fan?: number
    max_fan?: number
  }
}

export interface WorkerFanflapStats {
  /** FanFlap controller stats */
  fanflap_stats?: FanflapStats
}

/**
 * FanFlap controller stats
 */
export interface FanflapStats {
  /**
   * Fan speeds, %
   * @example [50,41,60]
   */
  fan?: number[]
}

export interface WorkerPowermeter {
  /** Configuration for Powermeter controller */
  powermeter?: { meters?: { url: string; user?: string; pass?: string }[] }
}

export interface WorkerPowermeterStats {
  /**
   * Powermeter controller stats.
   * Each value is an array containing values from corresponding meter.
   *
   */
  powermeter_stats?: PowermeterStats
}

/**
  * Powermeter controller stats.
  Each value is an array containing values from corresponding meter.
  */
export interface PowermeterStats {
  /**
   * Current power draw, kilowatts (kW)
   * @example [[56.7,56.8,58.5],[44.3,44.6,43.1]]
   */
  power?: number[][]

  /**
   * Current total power draw, kilowatts (kW)
   * @example [171.9,132]
   */
  power_total?: number[]

  /**
   * Power usage value, kilowatthours (kWh)
   * @example [123456.7,253235.6]
   */
  energy_total?: number[]
}

export interface WorkerDonnagerRelay {
  /** Donnager Relay configuration */
  donnager_relay?: { channels?: { index?: number; worker_id?: number }[] }
}

export interface WorkerDonnagerRelayInfo {
  /** Donnager Relay information */
  donnager_relay_info?: { firmware?: string }
}

export interface WorkerDonnagerRelayStats {
  /** Donnager Relay stats */
  donnager_relay_stats?: {
    channels?: { index?: number; state?: number; current?: number }[]
  }
}

export interface WorkerYkedaAutofan {
  /** Configuration for Ykeda Autofan controller */
  ykeda_autofan?: {
    fan?: number
    auto?: boolean
    target_temp?: number
    target_mem_temp?: number
    min_fan?: number
    max_fan?: number
  }
}

export interface WorkerWindtankAutofan {
  /** Configuration for Windtank Autofan controller */
  windtank_autofan?: {
    fan?: number
    auto?: boolean
    target_temp?: number
    target_mem_temp?: number
    min_fan?: number
  }
}

export interface WorkerMknetAutofan {
  /** Configuration for 8MK_NET Autofan controller */
  ykeda_autofan?: {
    fan?: number
    auto?: boolean
    target_temp?: number
    target_mem_temp?: number
    min_fan?: number
    max_fan?: number
  }
}

export interface WorkerYkedaAutofanInfo {
  /** Information about installed Ykeda Autofan controller */
  coolbox_info?: { model?: string }
}

export interface WorkerWindtankAutofanInfo {
  /** Information about installed Windtank Autofan controller */
  windtank_autofan_info?: { model?: string }
}

export interface WorkerMknetAutofanInfo {
  /** Information about installed 8MK_NET Autofan controller */
  coolbox_info?: { model?: string }
}

export interface WorkerYkedaAutofanStats {
  /** Ykeda Autofan controller stats */
  ykeda_autofan_stats?: { casefan?: number[]; thermosensors?: number[] }
}

export interface WorkerWindtankAutofanStats {
  /** Windtank Autofan controller stats */
  windtank_autofan_stats?: { casefan?: number[]; thermosensors?: number[] }
}

export interface WorkerMknetAutofanStats {
  /** 8MK_NET Autofan controller stats */
  ykeda_autofan_stats?: { casefan?: number[]; thermosensors?: number[] }
}

export interface PowerDrawSettings {
  /**
   * Power consumption of worker's hardware, watts
   * @example 715
   */
  hardware_power_draw?: number

  /**
   * Efficiency of power supply unit, %
   * @example 85
   */
  psu_efficiency?: number

  /** Apply power correction settings to power consumption value from Octominer fan controller. Default is false. */
  octofan_correct_power?: boolean
}

export interface WorkerAsicConfig {
  /** Settings for ASICs with Hive firmware, depends on model and firmware version */
  asic_config?: Record<string, string>
}

export interface WorkerMetric {
  /**
   * @format timestamp
   * @example 1526342689
   */
  time?: number

  /**
   * GPUs or ASIC boards count
   * @example 6
   */
  units?: number

  /**
   * Temperature, °C
   * @example [71,74,69]
   */
  temp?: number[]

  /**
   * Fan speed
   * @example [56,63,50]
   */
  fan?: number[]

  /**
   * Total power draw, watts
   * @example 1240
   */
  power?: number

  /** Hashrates by algorithm */
  hashrates?: { algo?: AlgoName; values?: number[] }[]

  /** FanFlap controller stats */
  fanflap?: FanflapStats

  /**
   * Powermeter controller stats.
   * Each value is an array containing values from corresponding meter.
   *
   */
  powermeter?: PowermeterStats
}

export interface WorkerConfigFiles {
  /** rig.conf file contents */
  "rig.conf"?: string
}

export interface GpuInfo {
  /**
   * GPU bus ID
   * @example 01:00.0
   */
  bus_id?: string

  /**
   * GPU bus number
   * @example 1
   */
  bus_number?: number

  /**
   * Brand name: amd, nvidia, internal
   * @example nvidia
   */
  brand?: string

  /**
   * Model name
   * @example GeForce GTX 1050 Ti
   */
  model?: string

  /**
   * Model short name
   * @example GTX 1050 Ti
   */
  short_name?: string
  details?: {
    mem?: string
    mem_gb?: number
    mem_type?: string
    mem_oem?: string
    vbios?: string
    subvendor?: string
    oem?: string
  }
  power_limit?: { min?: string; def?: string; max?: string }

  /** Index on rig */
  index?: number
}

/**
 * GPU stats
 */
export interface GpuStats {
  /**
   * Temperature, °C
   * @example 50
   */
  temp?: number

  /**
   * Fan speed, %
   * @example 37
   */
  fan?: number

  /**
   * Power draw, watts
   * @example 100
   */
  power?: number

  /**
   * Core clock, MHz
   * @example 1582
   */
  coreclk?: number

  /**
   * Memory clock, MHz
   * @example 4455
   */
  memclk?: number

  /**
   * Memory temperature, °C
   * @example 50
   */
  memtemp?: number
}

export type Gpu = { worker?: WorkerShortInfo } & GpuInfo & {
    stats?: GpuStats
    flashing_state?: GpuFlashingState
  }

/**
 * Contains information about currently running or recent flashing process.
 */
export interface GpuFlashingState {
  /** Last successfully flashed ROM */
  last_ok?: GpuFlashedRom

  /** Latest flashing if it failed */
  last_failed?: GpuFlashedRom

  /** Flashing being executed right now */
  in_process?: GpuFlashedRom & { cmd_id?: number }
}

export interface GpuFlashedRom {
  /** Rom ID that was flashed */
  rom_id?: number

  /** Rom name */
  rom_name?: string

  /**
   * When the ROM was flashed
   * @format timestamp
   */
  time?: number
}

/**
 * Worker platform:
 * 1 - GPU
 * 2 - ASIC
 * 3 - Device
 * @example 1
 */
export type Platform = 1 | 2 | 3

export interface FSFields {
  /** Display name */
  name?: string

  /** Is favorite flag */
  is_favorite?: boolean
}

export interface FSItemFields {
  /**
   * Coin name
   * @example ETH
   */
  coin: string

  /**
   * Pool name
   * @example nanopool
   */
  pool?: string

  /**
   * Pool geo
   * @example ["EU"]
   */
  pool_geo?: string[]

  /** Use SSL when connecting to pool */
  pool_ssl?: boolean

  /**
   * Pool urls
   * @example ["eth-eu1.nanopool.org:9999","eth-eu2.nanopool.org:9999"]
   */
  pool_urls?: string[]

  /** Wallet ID */
  wal_id: number

  /** Email for pool */
  email?: string

  /**
   * Second coin name for dual miner
   * @example DCR
   */
  dcoin?: string

  /**
   * Second pool name for dual miner
   * @example nanopool
   */
  dpool?: string

  /**
   * Second pool geo
   * @example ["EU"]
   */
  dpool_geo?: string[]

  /** Use SSL when connecting to second pool */
  dpool_ssl?: boolean

  /**
   * Second pool urls
   * @example ["sia-eu1.nanopool.org:19999","sia-eu2.nanopool.org:19999"]
   */
  dpool_urls?: string[]

  /** Second wallet ID for dual miner */
  dwal_id?: number

  /** Second email for pool for dual miner */
  demail?: string

  /** Miner ID */
  miner: MinerName

  /** Miner configuration. See MinerConfig object for list of per-miner options */
  miner_config: MinerConfig
}

export interface FSItems {
  items?: FSItemFields[]
}

export type FlightSheet = { id?: number } & FSFields & {
    items?: FSItemFullInfo[]
    workers_count?: number
  }

export type FlightSheetF = FlightSheet & FarmId & UserId

export type FlightSheetU = FlightSheet & UserId

export type FSCreateRequest = FSFields & FSItems

export type FSUpdateRequest = FSFields & FSItems

export interface FSShortInfo {
  id?: number
  farm_id?: number
  user_id?: number

  /** Display name */
  name?: string
}

export interface FSMidInfo {
  id?: number
  farm_id?: number
  user_id?: number

  /** Display name */
  name?: string
  items?: FSItemMidInfo[]
}

export interface FSItemMidInfo {
  /**
   * Coin name
   * @example ETH
   */
  coin?: string

  /**
   * Pool name
   * @example nanopool
   */
  pool?: string

  /** Wallet ID */
  wal_id?: number

  /**
   * Second coin name for dual miner
   * @example DCR
   */
  dcoin?: string

  /**
   * Second pool name for dual miner
   * @example nanopool
   */
  dpool?: string

  /** Second wallet ID */
  dwal_id?: number

  /** Miner ID */
  miner?: MinerName

  /** Additional text for miner name. For example fork name or veersion. */
  miner_alt?: string
}

export type FSItemFullInfo = FSItemFields & { miner_alt?: string }

/**
 * Miners configuration
 */
export type MinersConfig = { miner: MinerName; config?: MinerConfig }[]

/**
 * Miner configuration. See MinerConfig object for list of per-miner options
 */
export type MinerConfig = object

/**
 * Per-miner configuration options
 */
export interface MinerConfigExaple {
  claymore?: {
    epools_tpl: string
    dpools_tpl?: string
    dcoin?: string
    dcri?: number
    claymore_user_config?: string
    ver?: string
  }
  "claymore-z"?: {
    zpools_tpl: string
    "claymore-z_user_config"?: string
    ver?: string
  }
  "claymore-x"?: {
    xpools_tpl: string
    "claymore-x_user_config"?: string
    ver?: string
  }
  ewbf?: {
    ztemplate: string
    zserver: string
    zport?: string
    zpass?: string
    fork?: string
    algo?: string
    user_config?: string
    ver?: string
  }
  ccminer?: {
    ccalgo: string
    ccuser: string
    fork?: string
    ccurl: string
    ccpass?: string
    ccextra?: string
    ccpoolextra?: string
    ver?: string
  }
  ethminer?: {
    template: string
    opencl?: boolean
    cuda?: boolean
    server: string
    port?: string
    pass?: string
    user_config?: string
    ver?: string
  }
  sgminer?: {
    template: string
    algo: string
    fork?: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }
  dstm?: {
    template: string
    server: string
    port?: string
    pass?: string
    user_config?: string
    ver?: string
  }
  bminer?: {
    algo: string
    template: string
    url: string
    pass?: string
    tls?: boolean
    algo2?: string
    template2?: string
    url2?: string
    pass2?: string
    tls2?: boolean
    intensity?: number
    user_config?: string
    ver?: string
  }
  lolminer?: {
    algo: string
    algo2?: string
    template: string
    template2?: string
    worker?: string
    worker2?: string
    server: string
    server2?: string
    port?: string
    port2?: string
    pass?: string
    pass2?: string
    tls?: boolean
    tls2?: boolean
    user_config?: string
    ver?: string
  }
  optiminer?: {
    template: string
    algo: string
    server: string
    port?: string
    pass?: string
    user_config?: string
    ver?: string
  }
  "xmr-stak"?: {
    fork?: string
    template: string
    url: string
    pass?: string
    user_config?: string
    amd?: string
    nvidia?: string
    cpu?: string
    hugepages?: number
    ver?: string
  }
  xmrig?: {
    template: string
    url: string
    pass?: string
    threads?: string
    user_config?: string
    ver?: string
  }
  "xmrig-amd"?: {
    template: string
    url: string
    pass?: string
    threads?: string
    user_config?: string
    ver?: string
  }
  "xmrig-nvidia"?: {
    template: string
    url: string
    pass?: string
    threads?: string
    user_config?: string
    ver?: string
  }
  "cpuminer-opt"?: {
    fork?: string
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }
  custom?: {
    miner: string
    install_url?: string
    algo?: AlgoName
    template: string
    url: string
    pass?: string
    user_config?: string
  }
  asicminer?: {
    template: string
    url: string
    pass?: string
    template2?: string
    url2?: string
    pass2?: string
    template3?: string
    url3?: string
    pass3?: string
    user_config?: string
    ver?: string
  }
  cryptodredge?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }
  phoenixminer?: { url: string; user_config?: string; ver?: string }
  teamredminer?: {
    algo: string
    algo2?: string
    template: string
    template2?: string
    worker?: string
    worker2?: string
    url: string
    url2?: string
    pass?: string
    pass2?: string
    user_config?: string
    user_config2?: string
    tls?: boolean
    tls2?: boolean
    ver?: string
    intensity?: string
  }
  "cast-xmr"?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }
  "t-rex"?: {
    algo: string
    template: string
    worker?: string
    url: string
    pass?: string
    tls?: boolean
    algo2?: string
    template2?: string
    worker2?: string
    url2?: string
    pass2?: string
    tls2?: boolean
    intensity?: number
    user_config?: string
    ver?: string
  }
  "wildrig-multi"?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }
  finminer?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }
  gminer?: {
    algo: string
    template: string
    server: string
    port?: string
    pass?: string
    tls?: boolean
    algo2?: string
    template2?: string
    server2?: string
    port2?: string
    pass2?: string
    tls2?: boolean
    user_config?: string
    ver?: string
  }

  /** Beam CUDA Miner */
  beamcuda?: {
    template: string
    url: string
    user_config?: string
    ver?: string
  }

  /** Beam OpenCL Miner */
  beamcl?: { template: string; url: string; user_config?: string; ver?: string }

  /** Grin Miner */
  grinminer?: {
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }

  /** Grin Gold Miner */
  gringoldminer?: {
    template: string
    url: string
    pass?: string
    tls?: boolean
    user_config?: string
    fork?: string
    ver?: string
  }

  /** GrinPro Miner */
  grinprominer?: {
    template: string
    url: string
    pass?: string
    tls?: boolean
    cpuload?: number
    user_config?: string
    ver?: string
  }

  /** NBMiner */
  nbminer?: {
    algo: string
    template: string
    url: string
    pass?: string
    algo2?: string
    template2?: string
    url2?: string
    pass2?: string
    intensity?: number
    user_config?: string
    ver?: string
  }

  /** HSPMinerAE */
  hspminerae?: {
    template: string
    worker?: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }

  /** zjazz CUDA miner */
  "zjazz-cuda"?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }

  /** RandomHash miner */
  rhminer?: {
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }

  /** Nanominer */
  nanominer?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    algo2?: string
    template2?: string
    url2?: string
    pass2?: string
    user_config2?: string
    common_config?: string
    ver?: string
  }

  /** KBMiner */
  kbminer?: {
    algo: string
    template: string
    url: string
    pass?: string
    tls?: boolean
    user_config?: string
    ver?: string
  }

  /** EggMinerGpu */
  eggminergpu?: {
    template: string
    worker: string
    tmpfs?: boolean
    user_config?: string
    ver?: string
  }

  /** Noncepool AMD miner */
  "noncepool-amd"?: {
    template: string
    worker: string
    tmpfs?: boolean
    user_config?: string
    ver?: string
  }

  /** Noncepool Nvidia miner */
  "noncepool-nvidia"?: {
    template: string
    worker: string
    tmpfs?: boolean
    user_config?: string
    ver?: string
  }

  /** miniZ */
  miniz?: {
    algo: string
    template: string
    url: string
    pass?: string
    tls?: boolean
    user_config?: string
    ver?: string
  }

  /** Sushi miner AMD */
  "sushi-miner-opencl"?: {
    template: string
    worker: string
    server: string
    port?: string
    user_config?: string
    ver?: string
  }

  /** Sushi miner Nvidia */
  "sushi-miner-cuda"?: {
    template: string
    worker: string
    server: string
    port?: string
    user_config?: string
    ver?: string
  }

  /** NoncerPro OpenCL */
  "noncerpro-opencl"?: {
    template: string
    worker: string
    server: string
    port?: string
    user_config?: string
    ver?: string
  }

  /** NoncerPro CUDA */
  "noncerpro-cuda"?: {
    template: string
    worker: string
    server: string
    port?: string
    user_config?: string
    ver?: string
  }

  /** NoncerPro Kadena */
  "noncerpro-kadena"?: {
    template: string
    server: string
    port?: string
    cuda?: boolean
    user_config?: string
    ver?: string
  }

  /** TT-Miner */
  "tt-miner"?: {
    algo: string
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }

  /** ckb-miner */
  "ckb-miner"?: {
    url: string
    opencl?: boolean
    user_config?: string
    ver?: string
  }

  /** smine */
  smine?: { template: string; url: string; user_config?: string; ver?: string }

  /** Cortex Miner */
  "cortex-miner"?: {
    template: string
    worker?: string
    url: string
    user_config?: string
    ver?: string
  }

  /** XmRig (new) */
  "xmrig-new"?: {
    algo: string
    template: string
    url: string
    pass?: string
    cpu?: boolean
    cpu_config?: string
    opencl?: boolean
    opencl_config?: string
    cuda?: boolean
    cuda_config?: string
    tls?: boolean
    hugepages?: number
    user_config?: string
    fork?: string
    ver?: string
  }

  /** Nimiq GPU miner */
  "nq-miner"?: {
    template: string
    worker?: string
    url: string
    cuda?: boolean
    user_config?: string
    ver?: string
  }

  /** Equihash miner for NiceHash */
  nheqminer?: {
    template: string
    url: string
    pass?: string
    user_config?: string
    fork?: string
    ver?: string
  }

  /** SRBMiner-MULTI */
  srbminer?: {
    algo: string
    template: string
    worker?: string
    url: string
    pass?: string
    tls?: boolean
    algo2?: string
    template2?: string
    worker2?: string
    url2?: string
    pass2?: string
    tls2?: boolean
    user_config?: string
    ver?: string
  }

  /** Folding@Home Client */
  fah?: {
    team?: string
    user?: string
    pass?: string
    cpu?: boolean
    cpu_config?: string
    cuda?: boolean
    cuda_config?: string
    opencl?: boolean
    opencl_config?: string
    cpu_usage?: number
    gpu_usage?: number
    ver?: string
  }

  /** DamoMiner */
  damominer?: {
    algo: string
    template: string
    worker?: string
    url: string
    pass?: string
    algo2?: string
    template2?: string
    worker2?: string
    url2?: string
    pass2?: string
    intensity?: number
    nicehash?: boolean
    user_config?: string
    ver?: string
  }

  /** Hellminer */
  hellminer?: {
    algo?: string
    template: string
    url: string
    user_config?: string
    ver?: string
  }

  /** XPM miner */
  xpmclient?: {
    template: string
    worker: string
    server: string
    port?: string
    user_config?: string
    ver?: string
  }

  /** Violetminer */
  violetminer?: {
    algo: string
    template: string
    worker?: string
    url: string
    pass?: string
    tls?: boolean
    user_config?: string
    ver?: string
  }

  /** VerthashMiner */
  verthashminer?: {
    algo?: string
    template: string
    url: string
    pass?: string
    tmpfs?: boolean
    user_config?: string
    ver?: string
  }

  /** UUPool CHIA Miner */
  uupool_chia_miner?: {
    account_key: string
    worker?: string
    plot_dirs?: string
    user_config?: string
    ver?: string
  }

  /** BzMiner */
  bzminer?: {
    algo: string
    algo2?: string
    template: string
    template2?: string
    worker?: string
    worker2?: string
    url: string
    url2?: string
    pass?: string
    pass2?: string
    disable_gpus?: string
    tls?: boolean
    tls2?: boolean
    lhr?: boolean
    lhr2?: boolean
    intensity?: number
    user_config?: string
    ver?: string
  }

  /** Team Black Miner */
  teamblackminer?: {
    algo: string
    template: string
    worker?: string
    host: string
    port?: string
    pass?: string
    disable_gpus?: string
    tls?: boolean
    user_config?: string
    ver?: string
  }

  /** Danila Miner */
  "danila-miner"?: {
    template: string
    url: string
    user_config?: string
    ver?: string
    pass?: string
    tls?: boolean
  }

  /** TON pool miner */
  tonpoolminer?: {
    template: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
  }

  /** Cminer */
  cminer?: {
    algo: string
    template: string
    worker?: string
    url: string
    pass?: string
    user_config?: string
    ver?: string
    tls?: boolean
  }
}

export interface WalletFields {
  /**
   * Display name
   * @example ETH wallet
   */
  name?: string

  /** @example 0x123123123123123123 */
  wal?: string

  /**
   * Wallet source. Can be either exchange name or any string.
   * For supported exchanges see /hive/wallet_sources endpoint.
   *
   */
  source?: string

  /** Try to retrieve wallet balance from blockchain or exchange */
  fetch_balance?: boolean

  /** ID of attached API key for balance fetching (if required) */
  api_key_id?: number

  /** is Hiveon wallet */
  hiveon?: boolean
}

export type Wallet = { id?: number } & WalletCoin &
  WalletFields &
  WalletBalance &
  WalletPoolBalances & { fs_count?: number; workers_count?: number }

export type WalletF = Wallet & FarmId & UserId

export type WalletU = Wallet & UserId

export interface WalletShortInfo {
  id?: number
  farm_id?: number
  user_id?: number

  /** Display name */
  name?: string
}

export interface WalletCoin {
  /**
   * Coin name
   * @example ETH
   */
  coin?: string
}

export type WalletCreateRequest = WalletCoin & WalletFields

export type WalletUpdateRequest = WalletFields

export interface WalletBalance {
  /**
   * Wallet balance info.
   * Either balance or status is present, not both.
   * Pending status indicates that the balance is fetching at the moment and will be available soon.
   * Other statuses indicate balance cannot be fetched.
   * Balance info is cached by 30 minutes.
   *
   */
  balance?: {
    value?: number
    value_fiat?: number
    status?:
      | "pending"
      | "not_found"
      | "invalid_address"
      | "coin_not_supported"
      | "exchange_not_supported"
      | "pool_not_supported"
      | "error_fetching"
      | "error_parsing"
      | "error"
  }
}

export interface WalletPoolBalances {
  /** Balances from pools that this wallet uses */
  pool_balances?: ({ pool?: string } & WalletBalance)[]
}

export interface OCFields {
  /** Display name */
  name?: string

  /** Is favorite flag */
  is_favorite?: boolean

  /** Overclocking profile configuration */
  options?: OCConfig
}

export type OC = { id?: number } & OCFields

export type OCF = OC & FarmId

export type OCU = OC & UserId

export interface OCShortInfo {
  id?: number
  farm_id?: number

  /** Display name */
  name?: string
}

export type OCCreateRequest = OCFields

export type OCUpdateRequest = OCFields & {
  options_update_mode?: "replace" | "merge"
}

/**
 * Overclocking profile configuration
 */
export interface OCConfig {
  /**
   * Default overclock.
   * This overclock will be applied if there is no configuration for needed algo.
   *
   */
  default?: OCProps
  by_algo?: ({ algo?: AlgoName } & OCProps)[]
}

export interface OCProps {
  /** Options for AMD cards */
  amd?: OCConfigAmd

  /** Options for Nvidia cards */
  nvidia?: OCConfigNvidia

  /** Options for ASICs with Hive firmware, depends on model and firmware version */
  asic?: OCConfigAsic

  /** Options for GPU tweakers */
  tweakers?: OCConfigTweakers
}

/**
  * Algorithm name. Overclock configuration for this algo will be applied.
  If not set - algo will be automatically resolved based on first applied flight sheet
  * @example ethash
  */
export type OCAlgo = string

/**
 * Options for AMD cards
 */
export interface OCConfigAmd {
  /** Core Clock (Mhz) */
  core_clock?: string

  /** Core State (Index) */
  core_state?: string

  /** Core Voltage (mV) */
  core_vddc?: string

  /** Memory Clock (Mhz) */
  mem_clock?: string

  /** Mem State (Index) */
  mem_state?: string

  /** Memory voltage (mV) */
  mem_mvdd?: string

  /** Memory bus voltage (mV) */
  mem_vddci?: string

  /** Fan (%) */
  fan_speed?: string

  /** Power Limit (W) (0 for stock value) */
  power_limit?: string
  tref_timing?: string

  /** SoC clock (MHz) */
  soc_clock?: string

  /** SoC maximum voltage (mV) */
  soc_vddmax?: string

  /** Aggressive undervolting (set OC for each DPM state) */
  aggressive?: boolean
}

/**
 * Options for Nvidia cards
 */
export interface OCConfigNvidia {
  /** +Core Clock (Mhz) */
  core_clock?: string

  /** +Memory (Mhz) */
  mem_clock?: string

  /** Fan (%) (0 for auto) */
  fan_speed?: string

  /** Power Limit (W) (0 for stock value) */
  power_limit?: string

  /** Turn Off LEDs (may not work on some cards) */
  logo_off?: boolean

  /** Enable OhGodAnETHlargementPill */
  ohgodapill?: boolean

  /** Timeout to start OhGodAnETHlargementPill, seconds */
  ohgodapill_start_timeout?: number

  /**
   * Arguments for OhGodAnETHlargementPill
   * @example --revA 0,1,2
   */
  ohgodapill_args?: string

  /** Delay before applying overclock, seconds */
  running_delay?: number

  /** Reduce power usage in idle state (1000 series) */
  reduce_power?: boolean

  /** Force P0 power state */
  force_p0?: boolean
}

/**
 * Options for ASICs with Hive firmware, depends on model and firmware version
 */
export type OCConfigAsic = Record<string, string>

/**
 * Options for GPU tweakers
 * @example {"amdmemtweak":[{"gpus":[0,1],"params":{"cl":100,"ras":55}},{"params":{"cl":110,"ras":60}}]}
 */
export type OCConfigTweakers = Record<
  string,
  { gpus?: number[]; params: any }[]
>

export interface TagFields {
  /** Display name */
  name?: string

  /** Display color ID */
  color?: number
}

export type Tag = { id?: number } & TagFields & {
    farms_count?: number
    workers_count?: number
  }

export type TagF = Tag & { is_auto?: boolean } & FarmId & UserId

export type TagU = Tag & TagTypeId & UserId

export type TagCreateRequest = TagFields

export type TagUpdateRequest = TagFields

export type TagUCreateRequest = TagFields & TagTypeId

export type TagUUpdateRequest = TagFields & TagTypeId

export interface TagTypeId {
  /**
   * Tag type
   * * 1 - For workers
   * * 2 - For farms
   *
   */
  type_id?: 1 | 2
}

/**
 * Tag IDs
 */
export interface TagIds {
  /** @example [47,52] */
  tag_ids?: number[]
}

export type TagIdsEdit = TagIds & {
  tag_update_mode?: "add" | "remove" | "replace"
}

export interface AclFields {
  /** Access role */
  role?: AccessRoleEnum

  /** Tags list for restricted access */
  tag_ids?: number[]

  /** Trusted user must have 2FA enabled otherwise the access will be read-only */
  twofa_required?: boolean

  /** Is active */
  active?: boolean
}

export type AclCreateRequest = { login: string } & AclFields

export type AclUpdateRequest = AclFields

export type FarmAcl = {
  id?: number
  user?: UserShortInfo
  is_shared?: boolean
} & AclFields

/**
 * Miner ID
 * @example claymore
 */
export enum MinerName {
  Claymore = "claymore",
  ClaymoreZ = "claymore-z",
  ClaymoreX = "claymore-x",
  Ewbf = "ewbf",
  Ccminer = "ccminer",
  Ethminer = "ethminer",
  Sgminer = "sgminer",
  Dstm = "dstm",
  Bminer = "bminer",
  Lolminer = "lolminer",
  Optiminer = "optiminer",
  XmrStak = "xmr-stak",
  Xmrig = "xmrig",
  CpuminerOpt = "cpuminer-opt",
  Custom = "custom",
  Asicminer = "asicminer",
}

/**
 * Command name
 * @example reboot
 */
export enum CommandsEnum {
  Reboot = "reboot",
  Shutdown = "shutdown",
  Upgrade = "upgrade",
  Miner = "miner",
  Teleconsole = "teleconsole",
  Hssh = "hssh",
  Exec = "exec",
  AmdDownload = "amd_download",
  AmdUpload = "amd_upload",
  NvidiaDownload = "nvidia_download",
  NvidiaUpload = "nvidia_upload",
  AsicUpgrade = "asic_upgrade",
  OctofanRecalibrate = "octofan_recalibrate",
  BenchmarkStop = "benchmark_stop",
  DonnagerRelaySwitch = "donnager_relay_switch",
  PoolTest = "pool_test",
}

/**
  * Data for command
  For `miner`:
  ```json
  {
    "action": "restart|stop|log|config|tuning",
    "miner_index": integer, Zero-based miner index, default is 0
  }
  ```
  For `teleconsole` and `hssh`:
  ```json
  {
    "action": "start|stop|restart"
  }
  ```
  For `exec`:
  ```json
  {
    "cmd": "command to execute"
  }
  ```
  For `amd_download` and `nvidia_download`:
  ```json
  {
    "gpu_index": integer, GPU index
    "to_storage": boolean, Save the ROM to farm's storage
  }
  ```
  For `amd_upload` and `nvidia_upload`:
  ```json
  {
    "gpu_index": integer, GPU index, zero-based (-1 to flash all GPUs)
    "rom": base64-string, ROM file contents
    "rom_id": integer, Use stored ROM instead of passing file contents
    "force": boolean, Force flashing regardless of security checkings
    "reboot": boolean, Reboot worker after successful flashing
  }
  ```
  For `upgrade`:
  ```json
  {
    "beta": boolean, Upgrade to latest beta version
    "version": string, Upgrade to this version
  }
  ```
  For `asic_upgrade`:
  ```json
  {
    "firmware_url": "firmware file url"
  }
  ```
  For `donnager_relay_switch`:
  ```json
  {
    "action": "on|off|restart"
    "indexes": integer array of channel indexes
  }
  ```
  For `pool_test`:
  ```json
  {
    "pool_urls": string array of stratum pool urls
    "pool_ssl": boolean, Use SSL
  }
  ```
  */
export type CommandData = object

export interface CommandRequest {
  /** Command name */
  command: CommandsEnum

  /**
   * Data for command
   * For `miner`:
   * ```json
   * {
   *   "action": "restart|stop|log|config|tuning",
   *   "miner_index": integer, Zero-based miner index, default is 0
   * }
   * ```
   * For `teleconsole` and `hssh`:
   *   "action": "start|stop|restart"
   * For `exec`:
   *   "cmd": "command to execute"
   * For `amd_download` and `nvidia_download`:
   *   "gpu_index": integer, GPU index
   *   "to_storage": boolean, Save the ROM to farm's storage
   * For `amd_upload` and `nvidia_upload`:
   *   "gpu_index": integer, GPU index, zero-based (-1 to flash all GPUs)
   *   "rom": base64-string, ROM file contents
   *   "rom_id": integer, Use stored ROM instead of passing file contents
   *   "force": boolean, Force flashing regardless of security checkings
   *   "reboot": boolean, Reboot worker after successful flashing
   * For `upgrade`:
   *   "beta": boolean, Upgrade to latest beta version
   *   "version": string, Upgrade to this version
   * For `asic_upgrade`:
   *   "firmware_url": "firmware file url"
   * For `donnager_relay_switch`:
   *   "action": "on|off|restart"
   *   "indexes": integer array of channel indexes
   * For `pool_test`:
   *   "pool_urls": string array of stratum pool urls
   *   "pool_ssl": boolean, Use SSL
   *
   */
  data?: CommandData
}

export interface RomUploadRequestItem {
  /** GPUs to flash. Different workers can be mixed here. */
  gpus?: { worker_id?: number; gpu_index?: string }[]

  /** Stored Rom ID to use */
  rom_id?: number

  /** Force flashing regardless of security checkings */
  force?: boolean

  /** Reboot worker after successful flashing of all GPUs */
  reboot?: boolean
}

/**
 * Access role
 * @example tech
 */
export enum AccessRoleEnum {
  Monitor = "monitor",
  Tech = "tech",
  Rocket = "rocket",
  Advanced = "advanced",
  Full = "full",
}

export interface PoolTemplate {
  /** Pool name */
  pool?: string

  /** Coin symbol */
  coin?: CoinSymbol
  props?: {
    servers?: { geo?: string; urls?: string[]; ssl_urls?: string[] }[]
    miners?: Record<string, object>
    stratum_ping?: boolean
  }
}

export interface AccountEvent {
  /** @example 12345 */
  id?: number

  /** @example 1785325 */
  timestamp?: number

  /** @example 2 */
  type_id?: number

  /** @example Login */
  type?: string

  /** @example 1.2.3.4 */
  ip?: string

  /** @example example.com */
  hostname?: string

  /** Action was performed by Hive administrator */
  by_admin?: boolean

  /** Details object is specific to event type */
  details?: object
}

export interface FarmEvent {
  /** @example 12345 */
  id?: number

  /** @example 1785325 */
  timestamp?: number

  /** @example 16 */
  type_id?: number

  /** @example Access changed */
  type?: string

  /** Action was performed by Hive administrator */
  by_admin?: boolean

  /** Indicates that this is a group of events */
  is_group?: boolean

  /** How many events the group contains */
  group_size?: number

  /** Details object is specific to event type */
  details?: object

  /** User who performed the action */
  user?: UserShortInfo

  /** Related worker */
  worker?: WorkerShortInfo
}

/**
 * Pagination data
 */
export interface Pagination {
  /** Total count of entries available for current request */
  total?: number

  /** Amount of returned entries */
  count?: number

  /** Amount of entries per page */
  per_page?: number

  /** Current page number */
  current_page?: number

  /** Amount of available pages */
  total_pages?: number
}

/**
 * Hive OS version info
 */
export interface HiveVersion {
  /**
   * System type (only for Hive release)
   * @example linux
   */
  system_type?: "linux" | "asic" | "windows"

  /**
   * Version number (Hive, Asic Hub beta, Asic Hub)
   * @example 0.5-51, 1.2.0-beta.1, 1.2.0
   */
  version?: string

  /**
   * Release date
   * @format date, yyyy-mm-dd
   * @example 2018-05-15
   */
  date?: string

  /**
   * Is new image released (only for Hive release)
   * @example true
   */
  image?: boolean

  /**
   * Indicates that released image (Hive) or release itself (Asic Hub) is beta
   * @example false
   */
  beta?: boolean

  /**
   * Version description
   * @format markdown
   */
  description?: string
}

/**
 * Algorithm name
 * @example ethash
 */
export type AlgoName = string

/**
 * Secondary algorithm name for dual miners
 * @example blake2s
 */
export type DAlgoName = string

/**
 * @format url
 * @example http://api.hiveos.farm
 */
export type MirrorUrl = string

/**
 * @format url
 * @example http://download.hiveos.farm/repo/binary
 */
export type RepoUrl = string

/**
 * Coin symbol
 * @example ETH
 */
export type CoinSymbol = string

/**
 * Secondary coin symbol for dual miners
 * @example SC
 */
export type DCoinSymbol = string

export interface LoginRequest {
  /** User login or email */
  login: string

  /** User password */
  password: string

  /** 2FA code from authenticating device */
  twofa_code?: TwofaCode
  remember?: boolean
}

export type SignupRequest = UserProfile & {
  password: Password
  promocode?: string
  ref_id?: number
}

/**
 * @format password
 */
export type Password = string

/**
 * Transaction type:
 * 1 - Deposit
 * 2 - Daily service usage
 * 3 - Referral Reward
 * 4 - Gift of fate
 * 5 - Referral Withdrawal
 * 6 - Sent to User
 * 7 - Received from User
 * 8 - Referral Exchange
 * 9 - Promo code
 * 10 - Sent to Farm
 * 12 - Deposit from referral balance
 */
export type TransactionTypeAccount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12

export interface TransactionAccount {
  /** Transaction ID */
  id?: number

  /**
   * Transaction timestamp
   * @example 1527679726
   */
  timestamp?: number

  /**
   * Transaction type:
   * * 1 - Deposit
   * * 2 - Daily service usage
   * * 3 - Referral Reward
   * * 4 - Gift of fate
   * * 5 - Referral Withdrawal
   * * 6 - Sent to User
   * * 7 - Received from User
   * * 8 - Referral Exchange
   * * 9 - Promo code
   * * 10 - Sent to Farm
   * * 12 - Deposit from referral balance
   *
   */
  type_id?: TransactionTypeAccount

  /**
   * Transaction amount
   * @example 0.003
   */
  amount?: number

  /**
   * Transaction currency
   * @example BTC
   */
  currency?: string

  /**
   * Transaction amount in fiat currency
   * @example 0.003
   */
  amount_fiat?: number

  /** Cost details for type 2. */
  cost_details?: TransactionCostItem[]

  /** Referral user for type 3 */
  referral_user?: UserShortInfo

  /** Comment for type 4 */
  comment?: string

  /**
   * Coinpayments transaction ID for type 1,
   * or blockchain transaction ID for type 5
   *
   */
  txid?: string

  /** Blockchain transaction explore URL for type 5 */
  txurl?: string

  /** Target user for type 6 */
  target_user?: UserShortInfo

  /** Source user for type 7 */
  source_user?: UserShortInfo

  /** Target farm for types 2, 10 */
  target_farm?: FarmShortInfo
}

/**
 * Transaction type:
 * 2 - Daily service usage
 * 4 - Gift of fate
 * 7 - Received from User
 * 10 - Sent to Farm
 * 11 - Received from Farm
 */
export type TransactionTypeFarm = 2 | 4 | 7 | 10 | 11

export interface TransactionFarm {
  /** Transaction ID */
  id?: number

  /**
   * Transaction timestamp
   * @example 1527679726
   */
  timestamp?: number

  /**
   * Transaction type:
   * * 2 - Daily service usage
   * * 4 - Gift of fate
   * * 7 - Received from User
   * * 10 - Sent to Farm
   * * 11 - Received from Farm
   *
   */
  type_id?: TransactionTypeFarm

  /**
   * Transaction amount in currency
   * @example 0.003
   */
  amount?: number

  /**
   * Transaction currency
   * @example BTC
   */
  currency?: string

  /** Cost details for type 2. */
  cost_details?: TransactionCostItem[]

  /** Comment for type 4 */
  comment?: string

  /** User who performed the opertation */
  user?: UserShortInfo

  /** Source user for type 7 */
  source_user?: UserShortInfo

  /** Target farm for type 10 */
  target_farm?: FarmShortInfo

  /** Source farm for type 11 */
  source_farm?: FarmShortInfo
}

export interface TransactionCostItem {
  /**
   * Billing type:
   * * 11 - Rigs general
   * * 12 - Rigs that mine on hiveon pool
   * * 13 - Rigs that mine hiveon coins on other pools
   * * 21 - ASICs general
   * * 22 - ASICs with Hive firmware
   *
   */
  type?: BillingType

  /**
   * Amount of used workers of this billing type
   * @example 1.23
   */
  amount?: number
}

export interface Payment {
  /** Payment ID */
  id?: number

  /** Payment timestamp */
  timestamp?: number

  /** Payment currency */
  currency?: string

  /** Payment amount in currency */
  amount?: number

  /** Payment amount in fiat currency */
  amount_fiat?: number

  /** Payment status */
  status?: number

  /** Payment status text */
  status_text?: string

  /** Transaction ID */
  txid?: string
}

export interface ReferralBalance {
  currency?: ReferralCurrency

  /**
   * Amount in currency
   * @example 0.5
   */
  amount?: number

  /**
   * Amount in fiat currency
   * @example 350
   */
  amount_fiat?: number

  /**
   * Conversion rate to fiat currency
   * @example 700
   */
  exchage_rate?: number
}

export interface ReferralPayoutAddress {
  currency: ReferralCurrency

  /** @example 0x434343434343434343 */
  payout_address: string
}

export enum ReferralCurrency {
  BTC = "BTC",
  ETH = "ETH",
  XRP = "XRP",
  LTC = "LTC",
  ZEC = "ZEC",
  ETC = "ETC",
  BCH = "BCH",
  XMR = "XMR",
  USDT = "USDT",
}

export interface ReferralPayoutRequest {
  currency: ReferralCurrency

  /** Amount in currency to withdraw */
  amount?: number

  /**
   * If TRUE - the whole referral balance in this currency will be withdrawn and "amount" will be ignored
   * @example false
   */
  all?: boolean
}

export interface AccountAccess {
  /**
   * List of IP addresses that are allowed to login to your account
   * Examples:
   * * `172.217.16.46` single IP address is allowed
   * * `172.217.16.0/24` will match any IP staring with 172.217.16.
   * * `172.217.0.0/16` will match any IP staring with 172.217.
   * * `0:0:0:0:0:ffff:b2a5:246` single IPV6 address
   * * `2001:db8::/48` will match any IPV6 address staring with 2001:db8::
   *
   */
  whitelist_ips?: string[]
}

export interface NotificationChannels {
  /** List of enabled notification channels */
  channels?: NotificationChannelEnum[]
  channels_data?: {
    telegram?: { auth_code?: string; username?: string }
    discord?: { auth_code?: string; username?: string }
    wechat?: { auth_code?: string; username?: string }
  }
}

export interface NotificationSubscriptionsAccount {
  /**
   * Per-channel lists of event names to notify.
   * - **telegram** - for Telegram;
   * - **discord** - for Discord;
   * - **wechat** - for WeChat;
   *
   */
  subscriptions?: {
    telegram?: NotificationSubscriptionsItemAccount
    discord?: NotificationSubscriptionsItemAccount
    wechat?: NotificationSubscriptionsItemAccount
  }
}

/**
 * @example ["login"]
 */
export type NotificationSubscriptionsItemAccount =
  NotificationAccountEventEnum[]

export interface NotificationSubscriptionsFarm {
  /**
   * Per-channel lists of event names to notify.
   * - **telegram** - for Telegram;
   * - **discord** - for Discord;
   * - **wechat** - for WeChat;
   *
   */
  subscriptions?: {
    telegram?: NotificationSubscriptionsItemFarm
    discord?: NotificationSubscriptionsItemFarm
    wechat?: NotificationSubscriptionsItemFarm
  }
}

/**
 * @example ["online","offline","danger","red_temp"]
 */
export type NotificationSubscriptionsItemFarm = NotificationFarmEventEnum[]

/**
 * * `login` - Log in using password
 */
export enum NotificationAccountEventEnum {
  Login = "login",
}

/**
 * * `offline` - Worker went offline
 * `online` - Worker became online
 * `boot` - Worker booted
 * `danger` - Danger message from worker
 * `warning` - Warning message from worker
 * `info` - Info message from worker
 * `success` - Success message from worker
 * `red_temp` - Temperature >= red_temp + 3°C
 * `red_mem_temp` - GPU memory temperature >= red_mem_temp + 3°C
 * `red_cpu_temp` - CPU temperature >= red_cpu_temp + 3°C
 * `red_board_temp` - ASIC board temperature >= red_board_temp + 3°C
 * `red_fan` - Fan speed >= red_fan + 5%
 * `red_asr` - Accepted shares ratio <= red_asr - 5%. Notification is muted while total amount of shares < 10.
 * `red_la` - Load averege (15m) >= red_la + 1. Notification is muted for 20 minutes after boot.
 * `missed_unit` - Missed GPU/Board
 * `summary` - Hourly summary
 */
export enum NotificationFarmEventEnum {
  Offline = "offline",
  Online = "online",
  Boot = "boot",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Success = "success",
  RedTemp = "red_temp",
  RedMemTemp = "red_mem_temp",
  RedCpuTemp = "red_cpu_temp",
  RedBoardTemp = "red_board_temp",
  RedFan = "red_fan",
  RedAsr = "red_asr",
  RedLa = "red_la",
  MissedUnit = "missed_unit",
  Summary = "summary",
}

/**
 * 2FA code from authenticating device
 * @example 234345
 */
export type TwofaCode = string

export interface AuthTokenItem {
  /** Token ID */
  id?: number

  /** Display name */
  name?: string

  /** Is manually created personal token */
  personal?: boolean

  /** Is active (for personal tokens) */
  active?: boolean

  /** Is current session token */
  current?: boolean

  /**
   * When token was created
   * @format timestamp
   * @example 1526342689
   */
  created_at?: number

  /**
   * When token expires
   * @format timestamp
   * @example 1526342689
   */
  expires_at?: number

  /**
   * When token was last used (5 minute precision)
   * @format timestamp
   * @example 1526342689
   */
  last_activity?: number

  /**
   * IP address of the client who created the token
   * @format ip
   * @example 1.2.3.4
   */
  ip?: string

  /** Resolved hostname */
  hostname?: string
}

export type AuthTokenItemFull = AuthTokenItem & { token?: string }

export interface AuthTokenItemCreateUpdateRequest {
  /** Display name */
  name?: string

  /** Is active */
  active?: boolean
}

export interface ApiKeyFields {
  /** Display name */
  name?: string

  /** API ID */
  api_id?: string

  /** API key */
  api_key?: string
}

export interface ApiKeySource {
  /** @example exchange */
  source_type?: "pool" | "exchange"

  /**
   * Pool name or exchange name.
   * For supported pools and exchanges see /hive/wallet_sources endpoint.
   *
   * @example binance
   */
  source_name?: string
}

export interface ApiKeySecret {
  /** API secret */
  api_secret?: string
}

export type ApiKey = ApiKeyFields & ApiKeySource & { created_at?: number }

export type ApiKeyF = ApiKey & FarmId

export type ApiKeyU = ApiKey & UserId

export type ApiKeyCreateRequest = ApiKeyFields & ApiKeySecret & ApiKeySource

export type ApiKeyUpdateRequest = ApiKeyFields & ApiKeySecret

export interface RomFields {
  /** File name */
  file_name?: string

  /** GPU brand */
  brand?: "amd" | "nvidia"

  /** Display name */
  name?: string

  /** Brief description */
  description?: string
}

export interface RomContents {
  /** Binary ROM contents */
  contents?: string
}

export type Rom = RomFields & CreatedAt

export type RomWithContents = RomFields & RomContents & CreatedAt

export type RomF = RomWithContents & FarmId

export type RomU = RomWithContents & UserId

export type RomListItemF = Rom & FarmId

export type RomListItemU = Rom & UserId

export type RomCreateUpdateRequest = RomFields & RomContents

export interface ScheduleFields {
  /** Display name */
  name?: string

  /**
   * When to apply the flight sheet.
   * If rrule is specified - this field defines when the first occurrence will happen.
   *
   * @format timestamp
   * @example 1526342689
   */
  launch_at?: number

  /**
   * How to repeat the task.
   * This field accepts RRULE definition from RFC 5545.
   *
   * @format RRULE
   * @example FREQ=DAILY;INTERVAL=1;COUNT=3
   */
  rrule?: string

  /**
   * Time zone for RRule. By default farm's or user's time zone is used.
   * @format timezone
   * @example UTC
   */
  timezone?: string

  /** Is active */
  active?: boolean
}

export type Schedule = ScheduleFields &
  CreatedAt & { prev_launch_at?: number; next_launch_at?: number }

export type ScheduleF = FarmId & Schedule & ScheduleActionF & ScheduleTargetF

export type ScheduleU = UserId & Schedule & ScheduleActionU & ScheduleTargetU

export type ScheduleListItemF = FarmId & Schedule

export type ScheduleListItemU = UserId & Schedule

export type ScheduleCreateUpdateRequestF = ScheduleFields &
  ScheduleActionF &
  ScheduleTargetF

export type ScheduleCreateUpdateRequestU = ScheduleFields &
  ScheduleActionU &
  ScheduleTargetU

export type ScheduleActionData = WorkerEditFS &
  WorkerEditOCId &
  WorkerEditOCMode & { command?: CommandsEnum; command_data?: CommandData } & {
    asic_oc?: { model_code?: string; config?: OCConfigAsic }
  }

export interface ScheduleActionF {
  /** Everything defined in this object will be applied to workers */
  action?: ScheduleActionData
}

export interface ScheduleActionU {
  /** Everything defined in this object will be applied to workers */
  action?: ScheduleActionData
}

export interface ScheduleTargetF {
  target?: { tag_ids?: number[] }
}

export interface ScheduleTargetU {
  target?: { tag_ids?: number[] }
}

export interface FarmTransfer {
  /** Who initiated the request */
  user?: UserShortInfo

  /** Who will be new farm's owner */
  target_user?: UserShortInfo

  /**
   * Transfer type
   * * `owner` - target user will become farm's owner
   * * `payer` - target user will become farm's payer
   *
   */
  type?: FarmTransferType

  /**
   * When the request was created
   * @format timestamp
   */
  created_at?: number

  /**
   * When the request will expire
   * @format timestamp
   */
  expires_at?: number
}

/**
 * Transfer type
 * `owner` - target user will become farm's owner
 * `payer` - target user will become farm's payer
 */
export enum FarmTransferType {
  Owner = "owner",
  Payer = "payer",
}

export interface WorkerIds {
  worker_ids?: number[]
}

export interface WorkerTransferRequest {
  /** Farm ID where to transfer the worker */
  target_farm_id: number
}

export interface WorkerSearchId {
  /** ID of cached workers selection */
  search_id?: string
}

export interface Deposit {
  /**
   * Deposit amount
   * @min 0.01
   */
  amount?: number

  /** Deposit source */
  source?: "account" | "farm"

  /** Farm ID if selected source is "farm" */
  source_farm_id?: number
}

export interface IDs {
  ids?: number[]
}

export interface FarmId {
  farm_id?: number
}

export interface UserId {
  user_id?: number
}

export interface CreatedAt {
  /**
   * When entity was created
   * @format timestamp
   * @example 1526342689
   */
  created_at?: number
}

export interface DepositAddress {
  /**
   * Provider name.
   * Available providers can be get from `/hive/deposit_address_providers` endpoint
   *
   */
  provider?: DepositAddressProvider

  /**
   * Currency.
   * Available currencies can be get from `/hive/deposit_address_providers` endpoint
   *
   */
  currency?: DepositAddressCurrency

  /**
   * Deposit address
   * @example 0x1234567890abcdef
   */
  address?: string

  /**
   * When the address was generated
   * @format timestamp
   * @example 1526342689
   */
  created_at?: number
}

export interface DepositAddressCreateRequest {
  /**
   * Provider name.
   * Available providers can be get from `/hive/deposit_address_providers` endpoint
   *
   */
  provider: DepositAddressProvider

  /**
   * Currency.
   * Available currencies can be get from `/hive/deposit_address_providers` endpoint
   *
   */
  currency: DepositAddressCurrency
}

/**
  * Provider name.
  Available providers can be get from `/hive/deposit_address_providers` endpoint
  * @example hive
  */
export type DepositAddressProvider = string

/**
  * Currency.
  Available currencies can be get from `/hive/deposit_address_providers` endpoint
  * @example ETH
  */
export type DepositAddressCurrency = string

export interface HiveStatItem {
  /** Item name */
  name?: string

  /** Percentage amount */
  amount?: number
}

/**
 * Notification channel
 */
export enum NotificationChannelEnum {
  Telegram = "telegram",
  Discord = "discord",
  Wechat = "wechat",
}

/**
 * Currency info
 */
export interface HiveCurrencyItem {
  /**
   * Symbol
   * @example BTC
   */
  currency?: string

  /**
   * Display name
   * @example Bitcoin
   */
  name?: string

  /**
   * Exchange rate to fiat currency
   * @example 5197.739
   */
  rate?: number
}

/**
 * Benchmark job
 */
export interface BenchmarkJob {
  /** Algorithm name */
  algo?: AlgoName

  /** Popularity of this algo. Lower is better. */
  rank?: number

  /** This algo is mined by another Hive users with the same GPUs. */
  recommended?: boolean
}

export interface BenchmarkRequest {
  /** Worker ID for individual run. */
  worker_id?: number

  /** Tags for batch run. Comma-separated list of Tag IDs. */
  tag_ids?: number[]

  /** Algo names to include in benchmark */
  algos: AlgoName[]
}

export interface Benchmark {
  id?: number
  farm_id?: number
  worker_id?: number
  tag_ids?: number[]

  /**
   * When the benchmark was started
   * @format timestamp
   */
  started_at?: number

  /**
   * When the benchmark was finished. If absent - the benchmark is still running.
   * @format timestamp
   */
  finished_at?: number

  /** This flag indicates that the benchmark was aborted. */
  aborted?: boolean

  /** Algorithms that were chosen for benchmark */
  algos?: AlgoName[]
}

export type BenchmarkWithResults = Benchmark & BenchmarkResults

export interface BenchmarkResults {
  /** Contains benchmark results. May contain partial results (not for all algos) if not finished yet. */
  results?: BenchmarkResultItem[]
}

export interface BenchmarkResultItem {
  /** Algorithm name */
  algo?: AlgoName

  /** Miner ID */
  miner?: MinerName

  /**
   * Average hashrate, kH/s
   * @example 123456
   */
  hashrate?: number

  /**
   * Average power draw, watts
   * @example 1234
   */
  power?: number
}

export interface ContainerFields {
  /** Container name */
  name?: string

  /** used to dispaly shape */
  type?: string
  description?: string

  /**
   * Amount of rows in the container
   * @min 1
   */
  rows?: number

  /**
   * Amount of rows in the container
   * @min 1
   */
  cols?: number
}

export interface ContainerCellsConfigField {
  /** Cells configuration */
  cells_config?: {
    position: ContainerCellPosition
    container_id?: number
    rules?: { worker_id?: number; worker_name?: string; ip?: string }
  }[]
}

export type Container = { id?: number } & ContainerFields &
  ContainerCellsConfigField &
  ContainerCellsField &
  ContainerStatsField

export type ContainerListItem = { id?: number } & ContainerFields &
  ContainerCellsConfigField &
  ContainerCellsField &
  ContainerStatsField

export interface ContainerCellsField {
  cells?: ContainerCell[]
}

export interface ContainerStatsField {
  stats?: ContainerStats
}

export interface ContainerCell {
  /** [x, y] */
  position?: ContainerCellPosition

  /** Attached worker ID */
  worker_id?: number

  /** Attached nested container ID */
  container_id?: number
}

/**
 * [x, y]
 * @example [0,0]
 */
export type ContainerCellPosition = number[]

export type ContainerCreateRequest = ContainerFields & ContainerCellsConfigField

export type ContainerUpdateRequest = ContainerFields & ContainerCellsConfigField

export type ContainerStats = FarmStats

/**
 * Billing type:
 * 11 - Rigs general
 * 12 - Rigs that mine on hiveon pool
 * 13 - Rigs that mine hiveon coins on other pools
 * 21 - ASICs general
 * 22 - ASICs with Hive firmware
 */
export type BillingType = 11 | 12 | 13 | 21 | 22

/**
 * @example overheat
 */
export enum Problem {
  Overheat = "overheat",
  Overload = "overload",
  LowAsr = "low_asr",
  HasInvalid = "has_invalid",
  MissedUnit = "missed_unit",
  MissedHashrate = "missed_hashrate",
  NoHashrate = "no_hashrate",
  ErrorMessage = "error_message",
}

export interface StringTemplateTestRequest {
  /**
   * String template
   * @example my-{{ id }}-{{ platform }}-{{ uid }}-{{ mac }}
   */
  template: string

  /**
   * Template data override.
   * By default synthetic values are used for all supprted fields.
   *
   */
  data?: object
}

export interface StringTemplateTestResult {
  /**
   * Template with resolved variables
   * @example my-1-rig-609f1c0b-3dae-4e3e-b040-286a93a86e68-d0:ab:d5:54:c5:6d
   */
  example?: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}
