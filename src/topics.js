export const READY_TOPICS = [
  'Assets',
  'AssetOperation',
  'AssetUtilization',
  'FuelUtilization',
  'LoadCounts'
];

export const VL_TOPICS = [{
  'name': 'Diagnostic',
  'context': 'CATDataTopics',
  'version': 4,
  'service': 'feed',
  'topic': 'Diagnostic'
},{
  'name': 'DigitalSwitchStatus',
  'context': 'CATDataTopics',
  'version': 3,
  'service': 'feed',
  'topic': 'DigStatus3'
},{
  'name': 'EngineParameters',
  'context': 'CATDataTopics',
  'version': 6,
  'service': 'feed',
  'topic': 'Engine'
},{
  'name': 'StartStop',
  'context': 'CATDataTopics',
  'version': 3,
  'service': 'feed',
  'topic': 'StartStop'
},{
  'name': 'EventData',
  'context': 'CATDataTopics',
  'version': 5,
  'service': 'feed',
  'topic': 'Event'
},{
  'name': 'AEMP',
  'context': 'AEMP',
  'version': 1,
  'service': 'Fleet'
},{
  'name': 'FuelInformation',
  'context': 'CATDataTopics',
  'version': 4,
  'service': 'feed',
  'topic': 'Fuel'
},{
  'name': 'GeoFence',
  'context': 'CATDataTopics',
  'version': 6,
  'service': 'feed',
  'topic': 'FenceAlert'
},{
  'name': 'SMULocation',
  'context': 'CATDataTopics',
  'version': 4,
  'service': 'feed',
  'topic': 'SMULOC'
}]
