var janin = {};

janin.currency = {
    createCurrency: function (name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate) {
        var currency = {};
        currency.name = name;
        currency.networkVersion = networkVersion;
        currency.privateKeyPrefix = privateKeyPrefix;
        currency.WIF_Start = WIF_Start;
        currency.CWIF_Start = CWIF_Start;
        currency.donate = donate;
        return currency;
    },

    name: function() {
        return janin.selectedCurrency.name;
    },

    networkVersion: function() {
        return janin.selectedCurrency.networkVersion;
    },

    privateKeyPrefix: function() {
        return janin.selectedCurrency.privateKeyPrefix;
    },

    WIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.WIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");
    },

    CWIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.CWIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");
    },

    // Switch currency
    useCurrency: function(index) {
        janin.selectedCurrency = janin.currencies[index];

        var coinImgUrl = "logos/" + janin.currency.name().toLowerCase() + ".png";
        document.getElementById("coinLogoImg").src = coinImgUrl;

        // Update title depending on currency
        document.title = janin.currency.name() + " " + ninja.translator.get("title");
        document.getElementById("siteTitle").alt = janin.currency.name() + " " + ninja.translator.get("title");

        // Update i18n link
        document.getElementById("cultureen").href = "?culture=en&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturefr").href = "?culture=fr&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturede").href = "?culture=de&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturenl").href = "?culture=nl&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturept").href = "?culture=pt&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureru").href = "?culture=ru&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturees").href = "?culture=es&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureua").href = "?culture=ua&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturetr").href = "?culture=tr&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureit").href = "?culture=it&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturepl").href = "?culture=pl&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturezh").href = "?culture=zh&currency=" + janin.currency.name().toLowerCase();

        if(ninja.seeder.isDone())
        {
            // Regenerate a new wallet when not expensive
            ninja.wallets.singlewallet.generateNewAddressAndKey();
            ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value);
            ninja.wallets.brainwallet.view();
        }

        // Reset wallet tab when expensive or not applicable
        document.getElementById("bulktextarea").value = "";
        document.getElementById("suppliedPrivateKey").value = "";

        // easter egg doge ;)
        if(janin.currency.name() == "Dogecoin")
        {
            janin.doge = new Doge(['wow', 'so paper wallet', 'such random', 'very pretty', 'much design', 'awesome', 'much crypto', 'such coin', 'wow!!', 'to da moon']);
            return;
        }

        if(janin.doge != null)
        {
            janin.doge.stop();
            janin.doge = null;
        }
    },
};

janin.currencies = [
    //                              name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate
    janin.currency.createCurrency ("2GIVE",               0x27, 0xa7, "6",    "R"    , ""),
    janin.currency.createCurrency ("42coin",              0x08, 0x88, "5",    "M"    , ""),
    janin.currency.createCurrency ("Acoin",               0x17, 0xe6, "8",    "b"    , ""),
    janin.currency.createCurrency ("AGAcoin",             0x53, 0xd3, "8",    "Y"    , ""),
    janin.currency.createCurrency ("Alphacoin",           0x52, 0xd2, "8",    "Y"    , ""),
    janin.currency.createCurrency ("Alqo",                0x17, 0xc1, "7",    "V"    , ""),
    janin.currency.createCurrency ("Animecoin",           0x17, 0x97, "6",    "P"    , ""),
    janin.currency.createCurrency ("Anoncoin",            0x17, 0x97, "6",    "P"    , ""),
    janin.currency.createCurrency ("Apexcoin",            0x17, 0x97, "6",    "P"    , ""),
    janin.currency.createCurrency ("Auroracoin",          0x17, 0x97, "6",    "T"    , ""),
    janin.currency.createCurrency ("Aquariuscoin",        0x17, 0x97, "6",    "P"    , ""),
    janin.currency.createCurrency ("Axe",                 0x4B, 0xCB, "7",    "X"    , ""),
    janin.currency.createCurrency ("BBQcoin",             0x55, 0xd5, "6",    "T"    , ""),
    janin.currency.createCurrency ("Biblepay",            0x19, 0xb6, "7",    "[TU]" , ""),
    janin.currency.createCurrency ("Bitcoin",             0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("BitcoinCash",         0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("BitcoinDark",         0x3c, 0xbc, "7",    "U"    , ""),
    janin.currency.createCurrency ("Bitcore",             0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("BitcoinGold",         0x26, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Bitconnect",          0x12, 0x92, "5",    "N"    , ""),
    janin.currency.createCurrency ("Birdcoin",            0x2f, 0xaf, "6",    "[ST]" , ""),
    janin.currency.createCurrency ("BitSynq",             0x3f, 0xbf, "7",    "V"    , ""),
    janin.currency.createCurrency ("BitZeny",             0x51, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Blackcoin",           0x19, 0x99, "6",    "P"    , ""),
    janin.currency.createCurrency ("BlackJack",           0x15, 0x95, "[56]", "P"    , ""),
    janin.currency.createCurrency ("BlockNet",            0x1a, 0x9a, "6",    "P"    , ""),
    janin.currency.createCurrency ("BolivarCoin",         0x55, 0xd5, "8",    "Y"    , ""),
    janin.currency.createCurrency ("BoxyCoin",            0x4b, 0xcb, "7",    "X"    , ""),
    janin.currency.createCurrency ("BunnyCoin",           0x1a, 0x9a, "6",    "P"    , ""),
    janin.currency.createCurrency ("Cagecoin",            0x1f, 0x9f, "6",    "Q"    , ""),
    janin.currency.createCurrency ("CampusCoin",          0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("CanadaeCoin",         0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("CannabisCoin",        0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Capricoin",           0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("CassubianDetk",       0x1e, 0x9e, "6",    "Q"    , ""),
    janin.currency.createCurrency ("CashCoin",            0x22, 0xa2, "6",    "[QR]" , ""),
    janin.currency.createCurrency ("Catcoin",             0x15, 0x95, "[56]", "P"    , ""),
    janin.currency.createCurrency ("ChainCoin",           0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("ColossusCoinXT",      0x1e, 0xd4, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Condensate",          0x3c, 0xbc, "7",    "U"    , ""),
    janin.currency.createCurrency ("Copico",              0x1c, 0x90, "5",    "N"    , ""),
    janin.currency.createCurrency ("CopperCoin",          0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Corgicoin",           0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("CryptoBullion",       0x0b, 0x8b, "5",    "M"    , ""),
    janin.currency.createCurrency ("CryptoClub",          0x23, 0xa3, "6",    "R"    , ""),
    janin.currency.createCurrency ("Cryptoescudo",        0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Cryptonite",          0x1c, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("CryptoWisdomCoin",    0x49, 0x87, "5",    "[LM]" , ""),
    janin.currency.createCurrency ("C2coin",              0x1c, 0x9c, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Dash",                0x4c, 0xcc, "7",    "X"    , ""),
    janin.currency.createCurrency ("DeafDollars",         0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("DeepOnion",           0x1f, 0x9f, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Deutsche eMark",      0x35, 0xb5, "7",    "T"    , ""),
    janin.currency.createCurrency ("Devcoin",             0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("DigiByte",            0x1e, 0x9e, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Digitalcoin",         0x1e, 0x9e, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Dimecoin",            0x0f, 0x8f, "5",    "N"    , ""),
    janin.currency.createCurrency ("DNotes",              0x1f, 0x9f, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Dogecoin",            0x1e, 0x9e, "6",    "Q"    , ""),
    janin.currency.createCurrency ("DogecoinDark",        0x1e, 0x9e, "6",    "Q"    , ""),
    janin.currency.createCurrency ("eGulden",             0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("eKrona",              0x2d, 0xad, "6",    "S"    , ""),
    janin.currency.createCurrency ("ELECTRA",             0x21, 0xa1, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Ember",               0x5c, 0x32, "2",    "8"    , ""),
    janin.currency.createCurrency ("Emerald",             0x22, 0xa2, "6",    "[QR]" , ""),
    janin.currency.createCurrency ("Emercoin",            0x21, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("EnergyCoin",          0x5c, 0xdc, "8",    "Z"    , ""),
    janin.currency.createCurrency ("Espers",              0x21, 0x90, "5",    "N"    , ""),
    janin.currency.createCurrency ("Fastcoin",            0x60, 0xe0, "8",    "a"    , ""),
    janin.currency.createCurrency ("Feathercoin",         0x0e, 0x8e, "5",    "N"    , ""),
    janin.currency.createCurrency ("Fedoracoin",          0x21, 0x80, "5",    "[KL]" , ""),
    janin.currency.createCurrency ("Fibre",               0x23, 0xa3, "6",    "R"    , ""),
    janin.currency.createCurrency ("Florincoin",          0x23, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("Flurbo",              0x23, 0x30, "6",    "8"    , ""),
    janin.currency.createCurrency ("Fluttercoin",         0x23, 0xa3, "6",    "R"    , ""),
    janin.currency.createCurrency ("FrazCoin",            0x23, 0xA3, "6",    "R"    , ""),
    janin.currency.createCurrency ("Freicoin",            0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("FUDcoin",             0x23, 0xa3, "6",    "R"    , ""),
    janin.currency.createCurrency ("Fuelcoin",            0x24, 0x80, "5",    "[KL]" , ""),
    janin.currency.createCurrency ("Fujicoin",            0x24, 0xa4, "6",    "R"    , ""),
    janin.currency.createCurrency ("GabenCoin",           0x10, 0x90, "5",    "N"    , ""),
    janin.currency.createCurrency ("Garlicoin",           0x26, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("GlobalBoost",         0x26, 0xa6, "6",    "R"    , ""),
    janin.currency.createCurrency ("Goodcoin",            0x26, 0xa6, "6",    "R"    , ""),
    janin.currency.createCurrency ("GridcoinResearch",    0x3e, 0xbe, "7",    "V"    , ""),
    janin.currency.createCurrency ("Gulden",              0x26, 0xa6, "6",    "R"    , ""),
    janin.currency.createCurrency ("Guncoin",             0x27, 0xa7, "6",    "R"    , ""),
    janin.currency.createCurrency ("HamRadioCoin",        0x00, 0x80, "5",    "LK"   , ""),
    janin.currency.createCurrency ("HFRcoin",             0x10, 0x90, "5",    "N"    , ""),
    janin.currency.createCurrency ("HOdlcoin",            0x28, 0xa8, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("HTMLCoin",            0x29, 0xa9, "6",    "S"    , ""),
    janin.currency.createCurrency ("HyperStake",          0x75, 0xf5, "9",    "d"    , ""),
    janin.currency.createCurrency ("ImperiumCoin",        0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("IncaKoin",            0x35, 0xb5, "7",    "T"    , ""),
    janin.currency.createCurrency ("IncognitoCoin",       0x00, 0x80, "5",    "LK"   , ""),
    janin.currency.createCurrency ("Influxcoin",          0x66, 0xe6, "8",    "b"    , ""),
    janin.currency.createCurrency ("Innox",               0x4b, 0xcb, "7",    "X"    , ""),
    janin.currency.createCurrency ("IridiumCoin",         0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("iCash",               0x66, 0xcc, "7",    "X"    , ""),
    janin.currency.createCurrency ("iXcoin",              0x8a, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Judgecoin",           0x2b, 0xab, "6",    "S"    , ""),
    janin.currency.createCurrency ("Jumbucks",            0x2b, 0xab, "6",    "S"    , ""),
    janin.currency.createCurrency ("KHcoin",              0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("KittehCoin",          0x2d, 0xad, "6",    "S"    , ""),
    janin.currency.createCurrency ("Lanacoin",            0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("Latium",              0x17, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("LBRY Credits",        0x55, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Litecoin",            0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("LiteDoge",            0x5a, 0xab, "6",    "S"    , ""),
    janin.currency.createCurrency ("LoMoCoin",            0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("MadbyteCoin",         0x32, 0x6e, "4",    "H"    , ""),
    janin.currency.createCurrency ("MagicInternetMoney",  0x30, 0xb0, "6",    "T"    , ""),
    janin.currency.createCurrency ("Magicoin",            0x14, 0x94, "5",    "[NP]" , ""),
    janin.currency.createCurrency ("Marscoin",            0x32, 0xb2, "6",    "T"    , ""),
    janin.currency.createCurrency ("MarteXcoin",          0x32, 0xb2, "6",    "T"    , ""),
    janin.currency.createCurrency ("MasterDoge",          0x33, 0x8b, "5",    "M"    , ""),
    janin.currency.createCurrency ("Mazacoin",            0x32, 0xe0, "8",    "a"    , ""),
    janin.currency.createCurrency ("Megacoin",            0x32, 0xb2, "6",    "T"    , ""),
    janin.currency.createCurrency ("MintCoin",            0x33, 0xb3, "[67]", "T"    , ""),
    janin.currency.createCurrency ("MobiusCoin",          0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("MonetaryUnit",        0x10, 0x7e, "5",    "K"    , ""),
    janin.currency.createCurrency ("Monocle",             0x32, 0xb2, "6",    "T"    , ""),
    janin.currency.createCurrency ("MoonCoin",            0x03, 0x83, "5",    "L"    , ""),
    janin.currency.createCurrency ("Myriadcoin",          0x32, 0xb2, "6",    "T"    , ""),
    janin.currency.createCurrency ("NameCoin",            0x34, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Navcoin",             0x35, 0x96, "6",    "P"    , ""),
    janin.currency.createCurrency ("NeedleCoin",          0x35, 0xb5, "7",    "T"    , ""),
    janin.currency.createCurrency ("NEETCOIN",            0x35, 0xb5, "7",    "T"    , ""),
    janin.currency.createCurrency ("NYC",                 0x3c, 0xbc, "7",    "U"    , ""),
    janin.currency.createCurrency ("Neoscoin",            0x35, 0xb1, "6",    "T"    , ""),
    janin.currency.createCurrency ("Nevacoin",            0x35, 0xb1, "6",    "T"    , ""),
    janin.currency.createCurrency ("Novacoin",            0x08, 0x88, "5",    "M"    , ""),
    janin.currency.createCurrency ("Nubits",              0x19, 0xbf, "7",    "V"    , ""),
    janin.currency.createCurrency ("Nyancoin",            0x2d, 0xad, "6",    "S"    , ""),
    janin.currency.createCurrency ("Ocupy",               0x73, 0xf3, "9",    "[cd]" , ""),
    janin.currency.createCurrency ("Omnicoin",            0x73, 0xf3, "9",    "[cd]" , ""),
    janin.currency.createCurrency ("Onyxcoin",            0x73, 0xf3, "9",    "[cd]" , ""),
    janin.currency.createCurrency ("PacCoin",             0x18, 0x98, "6",    "P"    , ""),
    janin.currency.createCurrency ("Particl",             0x38, 0x6c, "4",    "[HG]" , ""),
    janin.currency.createCurrency ("Paycoin",             0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("Pandacoin",           0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("ParkByte",            0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("Peercoin",            0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("Pesetacoin",          0x2f, 0xaf, "6",    "[ST]" , ""),
    janin.currency.createCurrency ("PHCoin",              0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("PhoenixCoin",         0x38, 0xb8, "7",    "U"    , ""),
    janin.currency.createCurrency ("PiggyCoin",           0x76, 0xf6, "9",    "d"    , ""),
    janin.currency.createCurrency ("Pinkcoin",            0x3,  0x83, "[RQP]","L"    , ""),
    janin.currency.createCurrency ("PIVX",                0x1e, 0xd4, "8",    "Y"    , ""),
    janin.currency.createCurrency ("Peercoin",            0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("Potcoin",             0x37, 0xb7, "7",    "U"    , ""),
    janin.currency.createCurrency ("Primecoin",           0x17, 0x97, "6",    "P"    , ""),
    janin.currency.createCurrency ("ProsperCoinClassic",  0x3a, 0xba, "7",    "Q"    , ""),
    janin.currency.createCurrency ("Quark",               0x3a, 0xba, "7",    "U"    , ""),
    janin.currency.createCurrency ("Qubitcoin",           0x26, 0xe0, "8",    "a"    , ""),
    janin.currency.createCurrency ("Reddcoin",            0x3d, 0xbd, "7",    "[UV]" , ""),
    janin.currency.createCurrency ("Riecoin",             0x3c, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Rimbit",              0x3c, 0xbc, "7",    "U"    , ""),
    janin.currency.createCurrency ("ROIcoin",             0x3c, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Rubycoin",            0x3c, 0xbc, "7",    "U"    , ""),
    janin.currency.createCurrency ("Rupaya",              0x3c, 0xbc, "7",    "U"    , ""),
    janin.currency.createCurrency ("Sambacoin",           0x3e, 0xbe, "7",    "V"    , ""),
    janin.currency.createCurrency ("SecKCoin",            0x3f, 0xbf, "7",    "V"    , ""),
    janin.currency.createCurrency ("SibCoin",             0x3f, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("SixEleven",           0x34, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("SmileyCoin",          0x19, 0x99, "6",    "P"    , ""),
    janin.currency.createCurrency ("SongCoin",            0x3f, 0xbf, "7",    "V"    , ""),
    janin.currency.createCurrency ("SpreadCoin",          0x3f, 0xbf, "7",    "V"    , ""),
    janin.currency.createCurrency ("StealthCoin",         0x3e, 0xbe, "7",    "V"    , ""),
    janin.currency.createCurrency ("Stratis",             0x3f, 0xbf, "7",    "V"    , ""),
    janin.currency.createCurrency ("SwagBucks",           0x3f, 0x99, "6",    "P"    , ""),
    janin.currency.createCurrency ("Syscoin",             0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Tajcoin",             0x41, 0x6f, "6",    "H"    , ""),
    janin.currency.createCurrency ("Terracoin",           0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Titcoin",             0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("TittieCoin",          0x41, 0xc1, "7",    "V"    , ""),
    janin.currency.createCurrency ("Topcoin",             0x42, 0xc2, "7",    "V"    , ""),
    janin.currency.createCurrency ("TransferCoin",        0x42, 0x99, "6",    "P"    , ""),
    janin.currency.createCurrency ("TreasureHuntCoin",    0x32, 0xb2, "6",    "T"    , ""),
    janin.currency.createCurrency ("TrezarCoin",          0x42, 0xC2, "7",    "V"    , ""),
    janin.currency.createCurrency ("Unobtanium",          0x82, 0xe0, "8",    "a"    , ""),
    janin.currency.createCurrency ("USDe",                0x26, 0xa6, "6",    "R"    , ""),
    janin.currency.createCurrency ("Vcash",               0x47, 0xc7, "7",    "W"    , ""),
    janin.currency.createCurrency ("Versioncoin",         0x46, 0xc6, "7",    "W"    , ""),
    janin.currency.createCurrency ("VergeCoin",           0x1e, 0x9e, "6",    "Q"    , ""),
    janin.currency.createCurrency ("Vertcoin",            0x47, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Viacoin",             0x47, 0xc7, "7",    "W"    , ""),
    janin.currency.createCurrency ("VikingCoin",          0x46, 0x56, "3",    "D"    , ""),
    janin.currency.createCurrency ("W2Coin",              0x49, 0xc9, "7",    "W"    , ""),
    janin.currency.createCurrency ("WACoins",             0x49, 0xc9, "7",    "W"    , ""),
    janin.currency.createCurrency ("WankCoin",            0x00, 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("WeAreSatoshiCoin",    0x87, 0x97, "6",    "P"    , ""),
    janin.currency.createCurrency ("WorldCoin",           0x49, 0xc9, "7",    "W"    , ""),
    janin.currency.createCurrency ("XP",                  0x4b, 0xcb, "7",    "X"    , ""),
    janin.currency.createCurrency ("Yenten",              0x4e, 0x7b, "5",    "K"    , ""),
    janin.currency.createCurrency ("Zcash",        [0x1c,0xb8], 0x80, "5",    "[LK]" , ""),
    janin.currency.createCurrency ("Zetacoin",            0x50, 0xE0, "8",    "a"    , ""),


    janin.currency.createCurrency ("Testnet Bitcoin",     0x6f, 0xef, "9",    "c"    , null),
    janin.currency.createCurrency ("Testnet Dogecoin",    0x71, 0xf1, "9",    "c"    , null),
    janin.currency.createCurrency ("Testnet MonetaryUnit",0x26, 0x40, "3",    "A"    , null),
    janin.currency.createCurrency ("Testnet PIVX",        0x8b, 0xef, "9",    "c"    , null),
    janin.currency.createCurrency ("Testnet WACoins",     0x51, 0xd1, "8",    "[XY]" , null)
                   ];
