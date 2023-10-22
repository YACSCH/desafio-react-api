const regiones = {
    1: 'Arica y Parinacota',
    2: 'Tarapaca',
    3: 'Antofagasta',
    4: 'Atacama',
    5: 'Coquimbo',
    6: 'Valparaiso',
    7: 'Metropolitana',
    8: 'Libertador General B. O.',
    9: 'Maule',
    10: 'BioBio',
    11: '',
    12: 'Los Rios',
    13: 'Los Lagos',
    14: 'Aysen',
    15: 'Punta Arenas',
    16: 'Ñuble',
  };
  
  export function getRegionGlosa(regionId) {
    return regiones[regionId] || 'Región Desconocida';
  }