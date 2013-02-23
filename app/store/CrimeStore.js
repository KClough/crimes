/*
 * File: app/store/CrimeStore.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.CrimeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Crime'
    ],

    config: {
        model: 'MyApp.model.Crime',
        storeId: 'CrimeStore',
        proxy: {
            type: 'ajax',
            extraParams: {
                where: 'DISPATCH_DATE>=\'2012-12-24\' AND DISPATCH_DATE <=\'2013-01-22\' AND UCR_GENERAL >= 100 AND UCR_GENERAL <= 600',
                outFields: 'DISPATCH_DATE,DISPATCH_TIME,TEXT_GENERAL_CODE,HOUR,POINT_X,POINT_Y,UCR_GENERAL,LOCATION_BLOCK'
            },
            url: 'http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/Police_Incidents/MapServer/0/query',
            reader: {
                type: 'json',
                rootProperty: 'features'
            }
        }
    }
});