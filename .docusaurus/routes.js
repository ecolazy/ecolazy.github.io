import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', 'a03'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '98e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3eb'),
    exact: true
  },
  {
    path: '/blog/constructing-a-3d-egg-shape-from-regular-polygons',
    component: ComponentCreator('/blog/constructing-a-3d-egg-shape-from-regular-polygons', '3b0'),
    exact: true
  },
  {
    path: '/blog/creating-3d-buildings-from-mastermap-with-qgis',
    component: ComponentCreator('/blog/creating-3d-buildings-from-mastermap-with-qgis', 'f01'),
    exact: true
  },
  {
    path: '/blog/designing-a-living-building:-an-organism-with-a-symbiotic-relationship-with-its-occupants',
    component: ComponentCreator('/blog/designing-a-living-building:-an-organism-with-a-symbiotic-relationship-with-its-occupants', '1c1'),
    exact: true
  },
  {
    path: '/blog/designing-for-comfort-and-practicality-in-motor-caravans',
    component: ComponentCreator('/blog/designing-for-comfort-and-practicality-in-motor-caravans', '1d1'),
    exact: true
  },
  {
    path: '/blog/designing-hardware-for-mounting-wireless-hardware-equiptment-on-marquees',
    component: ComponentCreator('/blog/designing-hardware-for-mounting-wireless-hardware-equiptment-on-marquees', '6a0'),
    exact: true
  },
  {
    path: '/blog/exploring-the-unique-characteristics-of-natural-building-materials',
    component: ComponentCreator('/blog/exploring-the-unique-characteristics-of-natural-building-materials', '6ac'),
    exact: true
  },
  {
    path: '/blog/flood-risk-assessment-of-pudding-brook',
    component: ComponentCreator('/blog/flood-risk-assessment-of-pudding-brook', '46c'),
    exact: true
  },
  {
    path: '/blog/gifford-circus-cry-wheel-performances',
    component: ComponentCreator('/blog/gifford-circus-cry-wheel-performances', 'ca4'),
    exact: true
  },
  {
    path: '/blog/inspire-index-polygon-house-prices',
    component: ComponentCreator('/blog/inspire-index-polygon-house-prices', '7f0'),
    exact: true
  },
  {
    path: '/blog/live-network-map-for-womad-festival',
    component: ComponentCreator('/blog/live-network-map-for-womad-festival', 'd94'),
    exact: true
  },
  {
    path: '/blog/mapping-wireless-coverage-at-the-royal-windsor-horse-show-with-arcgis',
    component: ComponentCreator('/blog/mapping-wireless-coverage-at-the-royal-windsor-horse-show-with-arcgis', '9f6'),
    exact: true
  },
  {
    path: '/blog/modeling-a-spherical-solar-concentrator',
    component: ComponentCreator('/blog/modeling-a-spherical-solar-concentrator', '140'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '772'),
    exact: true
  },
  {
    path: '/blog/parish-house-prices',
    component: ComponentCreator('/blog/parish-house-prices', '5b7'),
    exact: true
  },
  {
    path: '/blog/provisioning-cisco-cloud-wireless-controller',
    component: ComponentCreator('/blog/provisioning-cisco-cloud-wireless-controller', '876'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4b9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ec7'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/page/2',
    component: ComponentCreator('/blog/tags/docusaurus/page/2', 'ce8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'fd4'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '33e'),
    exact: true
  },
  {
    path: '/blog/tags/hola/page/2',
    component: ComponentCreator('/blog/tags/hola/page/2', '5c5'),
    exact: true
  },
  {
    path: '/blog/tracking-network-hardware-assets-at-the-isle-of-wight-festival',
    component: ComponentCreator('/blog/tracking-network-hardware-assets-at-the-isle-of-wight-festival', '293'),
    exact: true
  },
  {
    path: '/blog/truss-connection-node-modeling',
    component: ComponentCreator('/blog/truss-connection-node-modeling', '16c'),
    exact: true
  },
  {
    path: '/blog/using-data-queries-to-enhance-wildlife-connectivity',
    component: ComponentCreator('/blog/using-data-queries-to-enhance-wildlife-connectivity', '2cf'),
    exact: true
  },
  {
    path: '/blog/vertical-farming-for-continuous-salad-production',
    component: ComponentCreator('/blog/vertical-farming-for-continuous-salad-production', '21a'),
    exact: true
  },
  {
    path: '/blog/wireless-coverage-at-manchester-pride',
    component: ComponentCreator('/blog/wireless-coverage-at-manchester-pride', '2d4'),
    exact: true
  },
  {
    path: '/blog/wireless-coverage-at-the-bath-festival-a-heatmap-analasis',
    component: ComponentCreator('/blog/wireless-coverage-at-the-bath-festival-a-heatmap-analasis', '6f4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '776'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'b03'),
    routes: [
      {
        path: '/about/about',
        component: ComponentCreator('/about/about', '8ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd0f'),
    routes: [
      {
        path: '/docs/artificial-intelligence/using-deepl-api',
        component: ComponentCreator('/docs/artificial-intelligence/using-deepl-api', '13e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/artificial-intelligence/using-openai-api',
        component: ComponentCreator('/docs/artificial-intelligence/using-openai-api', '189'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/artificial-intelligence',
        component: ComponentCreator('/docs/category/artificial-intelligence', '314'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/cloud-computing',
        component: ComponentCreator('/docs/category/cloud-computing', 'd34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/desktop-linux',
        component: ComponentCreator('/docs/category/desktop-linux', '938'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/environmental-monitoring',
        component: ComponentCreator('/docs/category/environmental-monitoring', 'f5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/geospatial-analysis',
        component: ComponentCreator('/docs/category/geospatial-analysis', 'e4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/parametric-modeling',
        component: ComponentCreator('/docs/category/parametric-modeling', '671'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/postgis-data-management-and-queries',
        component: ComponentCreator('/docs/category/postgis-data-management-and-queries', 'b86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/publishing-maps-with-leaflet',
        component: ComponentCreator('/docs/category/publishing-maps-with-leaflet', '9f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/python-for-gis',
        component: ComponentCreator('/docs/category/python-for-gis', 'a74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/reading-sensors-with-python',
        component: ComponentCreator('/docs/category/reading-sensors-with-python', 'f3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/uploading-data-to-postgis-with-linux-shell',
        component: ComponentCreator('/docs/category/uploading-data-to-postgis-with-linux-shell', '90c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/working-with-files-via-linux-shell',
        component: ComponentCreator('/docs/category/working-with-files-via-linux-shell', 'afc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-computing/infrastructure-as-a-service',
        component: ComponentCreator('/docs/cloud-computing/infrastructure-as-a-service', 'f30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-computing/platform-as-a-service',
        component: ComponentCreator('/docs/cloud-computing/platform-as-a-service', 'ac8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-computing/software-as-a-service',
        component: ComponentCreator('/docs/cloud-computing/software-as-a-service', '44f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/configuring-visual-studio-code',
        component: ComponentCreator('/docs/desktop-linux/configuring-visual-studio-code', 'ddf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/provisioning-fedora-workstation',
        component: ComponentCreator('/docs/desktop-linux/provisioning-fedora-workstation', '630'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/setting-up-qgis',
        component: ComponentCreator('/docs/desktop-linux/setting-up-qgis', '237'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/setup-rclone',
        component: ComponentCreator('/docs/desktop-linux/setup-rclone', 'e3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension',
        component: ComponentCreator('/docs/desktop-linux/working-with-files-via-linux-shell/cp-files-into-directories-by-extension', '44a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/working-with-files-via-linux-shell/extract-all-zips',
        component: ComponentCreator('/docs/desktop-linux/working-with-files-via-linux-shell/extract-all-zips', 'f83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly',
        component: ComponentCreator('/docs/desktop-linux/working-with-files-via-linux-shell/rename-all-linux-frendly', 'd8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/installing-cisco-cloud-wireless-controller',
        component: ComponentCreator('/docs/environmental-monitoring/installing-cisco-cloud-wireless-controller', '16f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/provisioning-fedora-coreos-on-the-raspberry-pi 4',
        component: ComponentCreator('/docs/environmental-monitoring/provisioning-fedora-coreos-on-the-raspberry-pi 4', '48d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/reading-sensors-with-python/ac-current',
        component: ComponentCreator('/docs/environmental-monitoring/reading-sensors-with-python/ac-current', 'c0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/reading-sensors-with-python/car-obd-port',
        component: ComponentCreator('/docs/environmental-monitoring/reading-sensors-with-python/car-obd-port', '097'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/reading-sensors-with-python/carbon-dioxide',
        component: ComponentCreator('/docs/environmental-monitoring/reading-sensors-with-python/carbon-dioxide', 'b7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd',
        component: ComponentCreator('/docs/environmental-monitoring/reading-sensors-with-python/starting-scripts-with-systemd', 'c03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/reading-sensors-with-python/thermocouple',
        component: ComponentCreator('/docs/environmental-monitoring/reading-sensors-with-python/thermocouple', '662'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environmental-monitoring/setting-up-influxdb-database-server',
        component: ComponentCreator('/docs/environmental-monitoring/setting-up-influxdb-database-server', 'bdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/query-flood-risk',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/query-flood-risk', '600'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/query-least-cost-path-wildlife-corridors',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/query-least-cost-path-wildlife-corridors', '955'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/query-microclimates',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/query-microclimates', 'cb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parcels', '6eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/query-price-paid-parish', '07c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/query-workings',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/query-workings', 'bf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/postgis-data-management-and-queries/wildlife-corridors-overview',
        component: ComponentCreator('/docs/geospatial-analysis/postgis-data-management-and-queries/wildlife-corridors-overview', 'dfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/publishing-maps/mapbox-map-with-leaflet',
        component: ComponentCreator('/docs/geospatial-analysis/publishing-maps/mapbox-map-with-leaflet', '006'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/publishing-maps/network-status-map',
        component: ComponentCreator('/docs/geospatial-analysis/publishing-maps/network-status-map', '265'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/python-for-gis/identify-flat-terrain-with-above-average-sun',
        component: ComponentCreator('/docs/geospatial-analysis/python-for-gis/identify-flat-terrain-with-above-average-sun', '4aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/setting-up-a-postgis-database-server',
        component: ComponentCreator('/docs/geospatial-analysis/setting-up-a-postgis-database-server', '94d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files',
        component: ComponentCreator('/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-bristol-city-council-geojson-files', 'c60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar',
        component: ComponentCreator('/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-environment-agency-lidar', 'b0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons',
        component: ComponentCreator('/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-land-registry-inspire-polygons', 'aee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-mastermap-with-astun-loader',
        component: ComponentCreator('/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-mastermap-with-astun-loader', '66f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery',
        component: ComponentCreator('/docs/geospatial-analysis/upload-data-to-postgis-with-linux-shell/loading-ordnance-survey-satellite-imagery', 'a39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/parametric-modeling/spherical-solar-concentrator-with-ladybug',
        component: ComponentCreator('/docs/parametric-modeling/spherical-solar-concentrator-with-ladybug', '214'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/parametric-modeling/sun-shading-model-with-radiance',
        component: ComponentCreator('/docs/parametric-modeling/sun-shading-model-with-radiance', '0e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b9a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
