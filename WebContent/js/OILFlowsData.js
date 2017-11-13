/**
 *
 */
OilFlows = {
  "flows": [
    {
      "flow": "AHS",
      "info": {
        "Consumer": "AHS applicaton",
        "Interfaces": "HC6150<br>HC6151<br>HC6152<br>HC6154",
        "Component": "OILAHS",
        "ResponseFlow": "OMS to OILNOTIF",
        "Documents": "OIL FD-NWS (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=061280008\">061280008</a>)<br>OIL Analysis - NWS - Technical Design ((<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=062050064\">062050064</a>)<br><br><br>"
      }
    },
    {
      "flow": "BEA",
      "info": {
        "Consumer": "BEA application",
        "Interfaces": "HC6030",
        "Component": "OILBEA",
        "ResponseFlow": "OMS->OILNOTIF->OILBEA_DISP<br>OILBEA_DISP updates the BEA DB via a stored proc.",
        "Documents": "OIL TD - OILBEA (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=092050006\">092050006</a>)<br>OIL Analysis - VAS-bundles-ADSL.doc (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=023640015\">023640015</a>)"
      }
    },
    {
      "flow": "BME",
      "info": {
        "Consumer": "BME application?<br>MOP - Portout",
        "Interfaces": "HC6091",
        "Component": "OILVOIP",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB",
        "Documents": "No relevant documentation in panagon."
      }
    },
    {
      "flow": "BMT",
      "info": {
        "Consumer": "OMS Operations",
        "Interfaces": "HC6047",
        "Component": "OILRI (reinject)",
        "ResponseFlow": "that of the re-injected channel",
        "Documents": "OIL TD - OILREINJECT (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=090070017\">090070017</a>)"
      }
    },
    {
      "flow": "BPM",
      "info": {
        "Consumer": "BPM<br><br><br>IDTV<br><br><br>",
        "Interfaces": "HC6097<br><br><br>HC6081<br><br><br>",
        "Component": "OILVOIP<br><br><br>OILBPM<br><br><br>",
        "ResponseFlow": "In the HC6097 flow OMS is the consumer. It sends a notification of type 'Request BPM Delivery and handle BPM Response_ReqDel' that is send to ESB. BPM responds via HC6097.<br><br>In the HC6081 flow IDTV calls OIL to send a mail.<br><br><br>",
        "Documents": "OIL FD - Dispatch to BPM (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070750039\">070750039</a>)<br>OIL TD - OILBPM_DISP (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070930041\">070930041</a>)<br><br>OIL Analysis - BPM (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=051390079\">051390079</a>)<br>OIL FD - BPM Implementation for iDTV option activation (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=051430013\">051430013</a>)"
      }
    },
    {
      "flow": "BST",
      "info": {
        "Consumer": "BST?",
        "Interfaces": "File in /oilp/oil/var/OILBST",
        "Component": "OILBST",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB",
        "Documents": "OIL Analysis - OILBST (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=082910011\">082910011</a>)"
      }
    },
    {
      "flow": "CDBCBP",
      "info": {
        "Consumer": "CDB applicaton",
        "Interfaces": "File in /oilp/oil/var/OILCDBCBP",
        "Component": "OILCDBCBP<br>exposing BatchCDBCBP_DMN",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB<br>OMS->OILNOTIF (HC6025)->ESB (CTG)",
        "Documents": "OIL Analysis - CDB Change Billing & Pricing (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810010\">022810010</a>)<br>OIL FD - CDB Change Billing & Pricing (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=050560030\">050560030</a>)"
      }
    },
    {
      "flow": "CDBDIMS",
      "info": {
        "Consumer": "tbd",
        "Interfaces": "File in /oilp/oil/var/OILCDBDIMS/input",
        "Component": "OILCDBDIMS<br>exposing BatchCDBDIMS",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB<br>OMS->OILNOTIF (HC6044) ->BIP Cached<br>OMS-OILNOTIF (HC6025)->OILESB_DISP->CTG<br>OMS-OILNOTIF (HC6025)->OILCAMP->OILBEAC",
        "Documents": "No relevant documentation in panagon."
      }
    },
    {
      "flow": "CDBICC",
      "info": {
        "Consumer": "CDB",
        "Interfaces": "File in /oilp/oil/var/OILCDBICC/input",
        "Component": "OILCDBICC<br>exposing BatchCDBICC",
        "Documents": "OIL Analysis - CDB Internal Credit Check (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810012\">022810012</a>)"
      }
    },
    {
      "flow": "CDBMC",
      "info": {
        "Consumer": "CDB",
        "Interfaces": "File in /oilp/oil/var/OILCDBMC/input",
        "Component": "OILCDBMC<br>exposing BatchCDBMC",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087) -> ESB<br>OMS->OILNOTIF (HC6025) -> ESB (CTG)<br>OMS->OILNOTIF (HC6037) -> DMS<br>OMS->OILNOTIF (HC6038) -> TTS",
        "Documents": "P121047B06 - OIL Analysis Design Ver1.2 (<a target=_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580098\">153580098</a>)<br>OIL Analysis - CDB Merge Customer (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810013\">022810013</a>)"
      }
    },
    {
      "flow": "CNPN",
      "info": {
        "Consumer": "CNP",
        "Interfaces": "HC6019",
        "Component": "OILCNPN - phased out in CRC09 2015<br>Replaced by I124038 - FNP Migration Phase 1",
        "ResponseFlow": "OILCNPN_DISP - phased out in CRC09 2015",
        "Documents": "OIL Analysis - CNP Notification Framework (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031290053\">031290053</a>)<br>(See <a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580016\">I124038 - FNP Migration Phase 1 - OIL Analysis  Design - Ver 1.3</a>)<br>IM5905223 OIL - Phase out of FNP components (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151420002\">151420002</a>)"
      }
    },
    {
      "flow": "CNPD",
      "info": {
        "Consumer": "CNP",
        "Interfaces": "HC6031",
        "Component": "OILCNPD - phased out in CRC09 2015<br>Replaced by I124038 - FNP Migration Phase 1",
        "ResponseFlow": "OILCNPD_DISP - phased out in CRC09 2015",
        "Documents": "OIL Analysis - CNP donor (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810014\">022810014</a>)<br>(See <a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580016\">I124038 - FNP Migration Phase 1 - OIL Analysis  Design - Ver 1.3</a>)"
      }
    },
    {
      "flow": "CNPR",
      "info": {
        "Consumer": "CNP",
        "Interfaces": "HC6032",
        "Component": "OILCNPR - phased out in CRC09 2015<br>Replaced by I124038 - FNP Migration Phase 1",
        "ResponseFlow": "OILCNPR_DISP - phased out in CRC09 2015",
        "Documents": "OIL Analysis - CNP recipient (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810015\">022810015</a>)<br>(See <a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580016\">I124038 - FNP Migration Phase 1 - OIL Analysis  Design - Ver 1.3</a>)"
      }
    },
    {
      "flow": "COB",
      "info": {
        "Consumer": "COB application?",
        "Interfaces": "HC6091<br>File in /oilp/oil/var/OILCOB",
        "Component": "OILVOIP<br>OILCOB",
        "ResponseFlow": "OMS->OILNOTIF->OILCOB_DISP (sends email to COB Hotline)",
        "Documents": "OIL Analysis - COB (<a  target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810016\\\">022810016</a>)"
      }
    },
    {
      "flow": "CPS",
      "info": {
        "Consumer": "CPS Application?",
        "Interfaces": "HC6033",
        "Component": "OILCPS",
        "ResponseFlow": "OMS->OILNOTIF (HC6025)->OILCSP_DISP<br>OMS->OILORDERNOTIF (HC6087)->ESB<br>OMS->OILNOTIF (HC6037)->DMS<br>OMS->OILNOTIF (HC6025)->OILBPM_DISP->OFA(RequestDataSynchronizeVoipConfiguration)",
        "Documents": "OIL Analysis - CPS (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810018\\\">022810018</a>)<br><br><br><br>"
      }
    },
    {
      "flow": "ECA",
      "info": {
        "Consumer": "ECA Application",
        "Interfaces": "HC6155 (OLO)<br>HC6091 (ECA)",
        "Component": "OILECA<br>OILVOIP",
        "ResponseFlow": "Tracking domain OLO: OMS->OILNOTIF->OILNWS_DISP->OLO<br>Tracking domain ECA: OMS->OILNOTIF->OILBPM_DISP->BPM (OMG)<br>OMS->OILORDERNOTIF (HC6087)->ESB<br>OMS->OILNOTIF (HC6037)->DMS",
        "Documents": "Tracking domain OLO: OIL Analysis - OILECA (<a  target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=112490002\\\">112490002</a>)<br><br><br><br>"
      }
    },
    {
      "flow": "EmailSending",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "HandleBadPayer",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "HandleOrder",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "IMA",
      "info": {
        "Consumer": "IMA ?",
        "Interfaces": "HC6083",
        "Component": "OILIMA<br>updates IMA_BUFFER",
        "ResponseFlow": "none<br>OILIMA_DAEMON creates flat file from IMA_BUFFER",
        "Documents": "OIL Analysis - Voice over IP (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=052620045\">052620045</a>)<br>out-of-date"
      }
    },
    {
      "flow": "LOA",
      "info": {
        "Consumer": "IVR and INN",
        "Interfaces": "ResumeLOA",
        "Component": "OILPOM",
        "ResponseFlow": "None. This call is just to update the order in OMS.<br>Note that ResumeLOA is called by the consumer via AI that calls ESB that calls the OIL service via a HUBInvoker.",
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)"
      }
    },
    {
      "flow": "MOP",
      "info": {
        "Consumer": "MOP (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "MTC",
      "info": {
        "Consumer": "tbd",
        "Interfaces": "Files in ${FTPHOME}/OILBATCH/input",
        "Component": "OILBATCH",
        "ResponseFlow": "Depends on the tracking domain mentioned in the input message. (Currently ECH or MCOM.)",
        "Documents": "OIL Analysis - MTC (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810020\">022810020</a>)"
      }
    },
    {
      "flow": "MTMK",
      "info": {
        "Consumer": "MTMK",
        "Interfaces": "HC6159",
        "Component": "OILPOM",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB<br>OMS->OILNOTIF (HC6025)->OILSOA_DISP->MTMK (bgc.services.mtmk.orderingfeedback.v1)",
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)<br>OIL Analysis - OILMTMK_DISP (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=121800002\">121800002</a>)"
      }
    },
    {
      "flow": "MTS",
      "info": {
        "Consumer": "OLO's",
        "Interfaces": "File in $FTPHOME/OILNWS/INPUT/NWS_i<br>See use of OIL DB NWS tables.",
        "Component": "OILNWS",
        "ResponseFlow": "OMS->OILORDERNTIF (HC6087)->ESB<br>OMS->OILNOTIF (HC6025)->OILNWS_DISP->OLO",
        "Documents": "OIL FD - NWS (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=061280008\">061280008</a>)<br>OIL Analysis - NWS - Technical Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=062050064\">062050064</a>)<br>OIL Analysis - NWS Mail Bouncing - Technical Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=063310002\">063310002</a>)<br>and several project related documents"
      }
    },
    {
      "flow": "MainProcess",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "NPE",
      "info": {
        "Consumer": "XNP",
        "Interfaces": "NPEXPORTORDER<br>Via OilGateway (ESB) and ESB_DAEMON.<br>OIL is producer of bgc.services.oil.npexportorder.v1",
        "Component": "OILXNP",
        "ResponseFlow": "OMS->OILNOTIF(HC6044->OILXNP_DISP->ESB<br>OIL sends ResponseData of bgc.services.oil.npexportorder.v1",
        "Documents": "I124038 - FNP Migration Phase 1 - OIL Analysis  Design - Ver 1.3 (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580016\">153580016</a>)<br>I124038 - Preliminary OIL Design Notes_V2 (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580014\">153580014</a>)<br>ESB_DAEMON_Design_Approach (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580015\">153580015</a>)<br>ESB_DAEMON Analysis and Design document ((<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580017\">153580017</a>)"
      }
    },
    {
      "flow": "NPI",
      "info": {
        "Consumer": "OMS",
        "Interfaces": "HC6034",
        "Component": "OILNOTIF->OILXNP_DISP->ESB<br>OIL consumer of bgc.services.xnp.ordernpimportnb.v1<br><br>",
        "ResponseFlow": "XNP sends ResponseData via ESB (OilGwateway),<br>ESB_Daemon to read OilGateway queue<br>and calls tuxedo service NPIMPORTORDER exposed by OILXNP. ",
        "Documents": "I124038 - FNP Migration Phase 1 - OIL Analysis  Design - Ver 1.3 (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580016\">153580016</a>)<br>I124038 - Preliminary OIL Design Notes_V2 (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580014\">153580014</a>)<br>ESB_DAEMON_Design_Approach (<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580015\">153580015</a>)<br>ESB_DAEMON Analysis and Design document ((<a target=\\\"_blank\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580017\">153580017</a>)"
      }
    },
    {
      "flow": "NPS",
      "info": {
        "Consumer": "NPS",
        "Interfaces": "HC6053",
        "Component": "OILNPS",
        "ResponseFlow": "None.",
        "Documents": "OIL Analysis - NPS-OMS Interface (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=030840108\">030840108</a>)"
      }
    },
    {
      "flow": "OHE",
      "info": {
        "Consumer": "SHE",
        "Interfaces": "HC6103",
        "Component": "OILVOIP",
        "ResponseFlow": "OMS->OILORDERNOTIF(HC6087)->ESB<br>OMS->OILNOTIF (HC6028)->OILTTS_DISP->TTS<br>OMS->OILNOTIF (HC6028)->OILBAEC_DISP->BEA DB",
        "Documents": "No relevant doc in panagon."
      }
    },
    {
      "flow": "OMS",
      "info": {
        "Consumer": "OMS",
        "Interfaces": "HC6087",
        "Component": "OILORDERNOTIF",
        "ResponseFlow": "This is part of OMS 's response flow as a result of orders sent to OMS ",
        "Documents": "P121033 - One selling CS2 Phase 2 - OIL Analysis & Design_V1.0 (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580091\">153580091</a>)<br>OIL TD - OILBPM_DISP (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070930041\">070930041</a>)"
      }
    },
    {
      "flow": "OrderCompletion",
      "info": {
        "Consumer": "IDTV",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "OrderFulfilment",
      "info": {
        "Consumer": "IDTV",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "POM",
      "info": {
        "Consumer": "POM",
        "Interfaces": "HC6153<br>HC6157<br>HC6160",
        "Component": "OILPOM",
        "ResponseFlow": "OMS->OILNOTIF (HC6025)->OILPOM_DISP->v1.handlecustomersituation.pom.services.bgc<br>\nOMS->OILNOTIF (HC6025)->OILESB_DISP->ESB (CTG)<br>\nOMS->OILORDERNOTIF (HC6087)->ESB<br>\nOMS->OILNOTIF (HC6038)->OILTTS_DISP<br>",
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)<br>OILSOA_DISP Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=110240003\">110240003</a>)<br><br><br>"
      }
    },
    {
      "flow": "PPC",
      "info": {
        "Consumer": "PPC?",
        "Interfaces": "HC6091",
        "Component": "OILVOIP",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB or Message ignored because CustomerSubSegment not supported<br>\nOMS->OILNOTIF (HC6037)->OILDMS_DISP<br>\nOMS->OILNOTIF (HC6037)->OILEV_DISP<br>\nOMS->OILNOTIF (HC6038)->OILTTS_DISP<br>\nOMS->OILNOTIF (HC6025)->OILESB_DISP->CTG",
        "Documents": "<br><br><br><br>P121047B06 - OIL Analysis Design Ver1.2 (<a target=_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=153580098\">153580098</a>)\n"
      }
    },
    {
      "flow": "RHE",
      "info": {
        "Consumer": "RHE",
        "Interfaces": "HC6082 (OHE in BMT!)",
        "Component": "OILEXTLOG",
        "ResponseFlow": "There is no response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "ROSY",
      "info": {
        "Consumer": "Rosy",
        "Interfaces": "HC6158",
        "Component": "OILPOM",
        "ResponseFlow": "OILPOM sends BGCOUT15 to OLO and omsorder to OMS.<br>OMS->OILORDERNOTIF (HC6087)->ESB",
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)"
      }
    },
    {
      "flow": "Retry2646",
      "info": {
        "Consumer": "IDTV",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": ""
      }
    },
    {
      "flow": "RosyAsynch",
      "info": {
        "Consumer": "tbd"
      }
    },
    {
      "flow": "RosyReportStatus",
      "info": {
        "Consumer": "tbd"
      }
    },
    {
      "flow": "RosyRetry",
      "info": {
        "Consumer": "tbd"
      }
    },
    {
      "flow": "SEAP",
      "info": {
        "Consumer": "tbd"
      }
    },
    {
      "flow": "SHE",
      "info": {
        "Consumer": "SHE",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "",
        "Documents": ""
      }
    },
    {
      "flow": "2651Process",
      "info": {
        "Consumer": "tbd"
      }
    },
    {
      "flow": "CEASE",
      "info": {
        "Consumer": "tbd"
      }
    },
    {
      "flow": "IVR",
      "info": {
        "Consumer": "FMC ? (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB"
      }
    },
    {
      "flow": "OLO",
      "info": {
        "Consumer": "NPA, Rosy (via AI)",
        "Interfaces": "HC6158",
        "Component": "OILPOM. Sends order to OMS and NGCOUT15 to OLO.",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB",
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)"
      }
    }
  ],
  "obsolete": {
    "doc": "OIL FD - Voice over IP (052370034)",
    "component": ""
  }
}