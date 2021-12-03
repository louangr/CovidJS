const resources = {
    strings: {
        countriesLabel: "Countries",
        positiveCasesLabel: "Positive Cases",
        deathsLabel: "Deaths",
        PIBByResidentLabel: "GDP / capita",
        nullValueLabel: "N/A"
    },
    isoCountryCode: {
        AD: { countryCodeAlpha3: 'AND', hasPIBValue: false },
        AE: { countryCodeAlpha3: 'ARE', hasPIBValue: false },
        AF: { countryCodeAlpha3: 'AFG', hasPIBValue: false },
        AG: { countryCodeAlpha3: 'ATG', hasPIBValue: false },
        AL: { countryCodeAlpha3: 'ALB', hasPIBValue: false },
        AM: { countryCodeAlpha3: 'ARM', hasPIBValue: false },
        AO: { countryCodeAlpha3: 'AGO', hasPIBValue: false },
        AR: { countryCodeAlpha3: 'ARG', hasPIBValue: true },
        AT: { countryCodeAlpha3: 'AUT', hasPIBValue: true },
        AU: { countryCodeAlpha3: 'AUS', hasPIBValue: true },
        AZ: { countryCodeAlpha3: 'AZE', hasPIBValue: false },
        BA: { countryCodeAlpha3: 'BIH', hasPIBValue: false },
        BB: { countryCodeAlpha3: 'BRB', hasPIBValue: false },
        BD: { countryCodeAlpha3: 'BGD', hasPIBValue: false },
        BE: { countryCodeAlpha3: 'BEL', hasPIBValue: true },
        BF: { countryCodeAlpha3: 'BFA', hasPIBValue: false },
        BG: { countryCodeAlpha3: 'BGR', hasPIBValue: true },
        BH: { countryCodeAlpha3: 'BHR', hasPIBValue: false },
        BI: { countryCodeAlpha3: 'BDI', hasPIBValue: false },
        BJ: { countryCodeAlpha3: 'BEN', hasPIBValue: false },
        BN: { countryCodeAlpha3: 'BRN', hasPIBValue: false },
        BO: { countryCodeAlpha3: 'BOL', hasPIBValue: false },
        BR: { countryCodeAlpha3: 'BRA', hasPIBValue: false },
        BS: { countryCodeAlpha3: 'BHS', hasPIBValue: false },
        BT: { countryCodeAlpha3: 'BTN', hasPIBValue: false },
        BW: { countryCodeAlpha3: 'BWA', hasPIBValue: false },
        BY: { countryCodeAlpha3: 'BLR', hasPIBValue: false },
        BZ: { countryCodeAlpha3: 'BLZ', hasPIBValue: false },
        CA: { countryCodeAlpha3: 'CAN', hasPIBValue: true },
        CD: { countryCodeAlpha3: 'COD', hasPIBValue: false },
        CF: { countryCodeAlpha3: 'CAF', hasPIBValue: false },
        CG: { countryCodeAlpha3: 'COG', hasPIBValue: false },
        CH: { countryCodeAlpha3: 'CHE', hasPIBValue: true },
        CI: { countryCodeAlpha3: 'CIV', hasPIBValue: false },
        CL: { countryCodeAlpha3: 'CHL', hasPIBValue: true },
        CM: { countryCodeAlpha3: 'CMR', hasPIBValue: false },
        CN: { countryCodeAlpha3: 'CHN', hasPIBValue: false },
        CO: { countryCodeAlpha3: 'COL', hasPIBValue: true },
        CR: { countryCodeAlpha3: 'CRI', hasPIBValue: true },
        CU: { countryCodeAlpha3: 'CUB', hasPIBValue: false },
        CV: { countryCodeAlpha3: 'CPV', hasPIBValue: false },
        CY: { countryCodeAlpha3: 'CYP', hasPIBValue: true },
        CZ: { countryCodeAlpha3: 'CZE', hasPIBValue: true },
        DE: { countryCodeAlpha3: 'DEU', hasPIBValue: true },
        DJ: { countryCodeAlpha3: 'DJI', hasPIBValue: false },
        DK: { countryCodeAlpha3: 'DNK', hasPIBValue: true },
        DM: { countryCodeAlpha3: 'DMA', hasPIBValue: false },
        DO: { countryCodeAlpha3: 'DOM', hasPIBValue: false },
        DZ: { countryCodeAlpha3: 'DZA', hasPIBValue: false },
        EC: { countryCodeAlpha3: 'ECU', hasPIBValue: false },
        EE: { countryCodeAlpha3: 'EST', hasPIBValue: true },
        EG: { countryCodeAlpha3: 'EGY', hasPIBValue: false },
        ER: { countryCodeAlpha3: 'ERI', hasPIBValue: false },
        ES: { countryCodeAlpha3: 'ESP', hasPIBValue: true },
        ET: { countryCodeAlpha3: 'ETH', hasPIBValue: false },
        FI: { countryCodeAlpha3: 'FIN', hasPIBValue: true },
        FJ: { countryCodeAlpha3: 'FJI', hasPIBValue: false },
        FM: { countryCodeAlpha3: 'FSM', hasPIBValue: false },
        FR: { countryCodeAlpha3: 'FRA', hasPIBValue: true },
        GA: { countryCodeAlpha3: 'GAB', hasPIBValue: false },
        GB: { countryCodeAlpha3: 'GBR', hasPIBValue: true },
        GD: { countryCodeAlpha3: 'GRD', hasPIBValue: false },
        GE: { countryCodeAlpha3: 'GEO', hasPIBValue: false },
        GH: { countryCodeAlpha3: 'GHA', hasPIBValue: false },
        GM: { countryCodeAlpha3: 'GMB', hasPIBValue: false },
        GN: { countryCodeAlpha3: 'GIN', hasPIBValue: false },
        GQ: { countryCodeAlpha3: 'GNQ', hasPIBValue: false },
        GR: { countryCodeAlpha3: 'GRC', hasPIBValue: true },
        GT: { countryCodeAlpha3: 'GTM', hasPIBValue: false },
        GW: { countryCodeAlpha3: 'GNB', hasPIBValue: false },
        GY: { countryCodeAlpha3: 'GUY', hasPIBValue: false },
        HN: { countryCodeAlpha3: 'HND', hasPIBValue: false },
        HR: { countryCodeAlpha3: 'HRV', hasPIBValue: true },
        HT: { countryCodeAlpha3: 'HTI', hasPIBValue: false },
        HU: { countryCodeAlpha3: 'HUN', hasPIBValue: true },
        ID: { countryCodeAlpha3: 'IDN', hasPIBValue: false },
        IE: { countryCodeAlpha3: 'IRL', hasPIBValue: true },
        IL: { countryCodeAlpha3: 'ISR', hasPIBValue: true },
        IN: { countryCodeAlpha3: 'IND', hasPIBValue: false },
        IQ: { countryCodeAlpha3: 'IRQ', hasPIBValue: false },
        IR: { countryCodeAlpha3: 'IRN', hasPIBValue: false },
        IS: { countryCodeAlpha3: 'ISL', hasPIBValue: true },
        IT: { countryCodeAlpha3: 'ITA', hasPIBValue: true },
        JM: { countryCodeAlpha3: 'JAM', hasPIBValue: false },
        JO: { countryCodeAlpha3: 'JOR', hasPIBValue: false },
        JP: { countryCodeAlpha3: 'JPN', hasPIBValue: true },
        KE: { countryCodeAlpha3: 'KEN', hasPIBValue: false },
        KG: { countryCodeAlpha3: 'KGZ', hasPIBValue: false },
        KH: { countryCodeAlpha3: 'KHM', hasPIBValue: false },
        KI: { countryCodeAlpha3: 'KIR', hasPIBValue: false },
        KM: { countryCodeAlpha3: 'COM', hasPIBValue: false },
        KN: { countryCodeAlpha3: 'KNA', hasPIBValue: false },
        KR: { countryCodeAlpha3: 'KOR', hasPIBValue: true },
        KW: { countryCodeAlpha3: 'KWT', hasPIBValue: false },
        KZ: { countryCodeAlpha3: 'KAZ', hasPIBValue: false },
        LA: { countryCodeAlpha3: 'LAO', hasPIBValue: false },
        LB: { countryCodeAlpha3: 'LBN', hasPIBValue: false },
        LC: { countryCodeAlpha3: 'LCA', hasPIBValue: false },
        LI: { countryCodeAlpha3: 'LIE', hasPIBValue: false },
        LK: { countryCodeAlpha3: 'LKA', hasPIBValue: false },
        LR: { countryCodeAlpha3: 'LBR', hasPIBValue: false },
        LS: { countryCodeAlpha3: 'LSO', hasPIBValue: false },
        LT: { countryCodeAlpha3: 'LTU', hasPIBValue: true },
        LU: { countryCodeAlpha3: 'LUX', hasPIBValue: true },
        LV: { countryCodeAlpha3: 'LVA', hasPIBValue: true },
        LY: { countryCodeAlpha3: 'LBY', hasPIBValue: false },
        MA: { countryCodeAlpha3: 'MAR', hasPIBValue: false },
        MC: { countryCodeAlpha3: 'MCO', hasPIBValue: false },
        MD: { countryCodeAlpha3: 'MDA', hasPIBValue: false },
        ME: { countryCodeAlpha3: 'MNE', hasPIBValue: false },
        MG: { countryCodeAlpha3: 'MDG', hasPIBValue: false },
        MH: { countryCodeAlpha3: 'MHL', hasPIBValue: false },
        MK: { countryCodeAlpha3: 'MKD', hasPIBValue: false },
        ML: { countryCodeAlpha3: 'MLI', hasPIBValue: false },
        MM: { countryCodeAlpha3: 'MMR', hasPIBValue: false },
        MN: { countryCodeAlpha3: 'MNG', hasPIBValue: false },
        MR: { countryCodeAlpha3: 'MRT', hasPIBValue: false },
        MT: { countryCodeAlpha3: 'MLT', hasPIBValue: true },
        MU: { countryCodeAlpha3: 'MUS', hasPIBValue: false },
        MV: { countryCodeAlpha3: 'MDV', hasPIBValue: false },
        MW: { countryCodeAlpha3: 'MWI', hasPIBValue: false },
        MX: { countryCodeAlpha3: 'MEX', hasPIBValue: true },
        MY: { countryCodeAlpha3: 'MYS', hasPIBValue: false },
        MZ: { countryCodeAlpha3: 'MOZ', hasPIBValue: false },
        NA: { countryCodeAlpha3: 'NAM', hasPIBValue: false },
        NE: { countryCodeAlpha3: 'NER', hasPIBValue: false },
        NG: { countryCodeAlpha3: 'NGA', hasPIBValue: false },
        NI: { countryCodeAlpha3: 'NIC', hasPIBValue: false },
        NL: { countryCodeAlpha3: 'NLD', hasPIBValue: true },
        NO: { countryCodeAlpha3: 'NOR', hasPIBValue: true },
        NP: { countryCodeAlpha3: 'NPL', hasPIBValue: false },
        NZ: { countryCodeAlpha3: 'NZL', hasPIBValue: true },
        OM: { countryCodeAlpha3: 'OMN', hasPIBValue: false },
        PA: { countryCodeAlpha3: 'PAN', hasPIBValue: false },
        PE: { countryCodeAlpha3: 'PER', hasPIBValue: false },
        PG: { countryCodeAlpha3: 'PNG', hasPIBValue: false },
        PH: { countryCodeAlpha3: 'PHL', hasPIBValue: false },
        PK: { countryCodeAlpha3: 'PAK', hasPIBValue: false },
        PL: { countryCodeAlpha3: 'POL', hasPIBValue: true },
        PS: { countryCodeAlpha3: 'PSE', hasPIBValue: false },
        PT: { countryCodeAlpha3: 'PRT', hasPIBValue: true },
        PW: { countryCodeAlpha3: 'PLW', hasPIBValue: false },
        PY: { countryCodeAlpha3: 'PRY', hasPIBValue: false },
        QA: { countryCodeAlpha3: 'QAT', hasPIBValue: false },
        RO: { countryCodeAlpha3: 'ROU', hasPIBValue: true },
        RS: { countryCodeAlpha3: 'SRB', hasPIBValue: false },
        RU: { countryCodeAlpha3: 'RUS', hasPIBValue: true },
        RW: { countryCodeAlpha3: 'RWA', hasPIBValue: false },
        SA: { countryCodeAlpha3: 'SAU', hasPIBValue: true },
        SB: { countryCodeAlpha3: 'SLB', hasPIBValue: false },
        SC: { countryCodeAlpha3: 'SYC', hasPIBValue: false },
        SD: { countryCodeAlpha3: 'SDN', hasPIBValue: false },
        SE: { countryCodeAlpha3: 'SWE', hasPIBValue: true },
        SG: { countryCodeAlpha3: 'SGP', hasPIBValue: false },
        SI: { countryCodeAlpha3: 'SVN', hasPIBValue: true },
        SK: { countryCodeAlpha3: 'SVK', hasPIBValue: true },
        SL: { countryCodeAlpha3: 'SLE', hasPIBValue: false },
        SM: { countryCodeAlpha3: 'SMR', hasPIBValue: false },
        SN: { countryCodeAlpha3: 'SEN', hasPIBValue: false },
        SO: { countryCodeAlpha3: 'SOM', hasPIBValue: false },
        SR: { countryCodeAlpha3: 'SUR', hasPIBValue: false },
        SS: { countryCodeAlpha3: 'SSD', hasPIBValue: false },
        ST: { countryCodeAlpha3: 'STP', hasPIBValue: false },
        SV: { countryCodeAlpha3: 'SLV', hasPIBValue: false },
        SY: { countryCodeAlpha3: 'SYR', hasPIBValue: false },
        SZ: { countryCodeAlpha3: 'SWZ', hasPIBValue: false },
        TD: { countryCodeAlpha3: 'TCD', hasPIBValue: false },
        TG: { countryCodeAlpha3: 'TGO', hasPIBValue: false },
        TH: { countryCodeAlpha3: 'THA', hasPIBValue: false },
        TJ: { countryCodeAlpha3: 'TJK', hasPIBValue: false },
        TL: { countryCodeAlpha3: 'TLS', hasPIBValue: false },
        TN: { countryCodeAlpha3: 'TUN', hasPIBValue: false },
        TO: { countryCodeAlpha3: 'TON', hasPIBValue: false },
        TR: { countryCodeAlpha3: 'TUR', hasPIBValue: true },
        TT: { countryCodeAlpha3: 'TTO', hasPIBValue: false },
        TW: { countryCodeAlpha3: 'TWN', hasPIBValue: false },
        TZ: { countryCodeAlpha3: 'TZA', hasPIBValue: false },
        UA: { countryCodeAlpha3: 'UKR', hasPIBValue: false },
        UG: { countryCodeAlpha3: 'UGA', hasPIBValue: false },
        US: { countryCodeAlpha3: 'USA', hasPIBValue: true },
        UY: { countryCodeAlpha3: 'URY', hasPIBValue: false },
        UZ: { countryCodeAlpha3: 'UZB', hasPIBValue: false },
        VA: { countryCodeAlpha3: 'VAT', hasPIBValue: false },
        VC: { countryCodeAlpha3: 'VCT', hasPIBValue: false },
        VE: { countryCodeAlpha3: 'VEN', hasPIBValue: false },
        VN: { countryCodeAlpha3: 'VNM', hasPIBValue: false },
        VU: { countryCodeAlpha3: 'VUT', hasPIBValue: false },
        WS: { countryCodeAlpha3: 'WSM', hasPIBValue: false },
        XK: { countryCodeAlpha3: 'XKX', hasPIBValue: false },
        YE: { countryCodeAlpha3: 'YEM', hasPIBValue: false },
        ZA: { countryCodeAlpha3: 'ZAF', hasPIBValue: true },
        ZM: { countryCodeAlpha3: 'ZMB', hasPIBValue: false },
        ZW: { countryCodeAlpha3: 'ZWE', hasPIBValue: false },
    }
}

export default resources