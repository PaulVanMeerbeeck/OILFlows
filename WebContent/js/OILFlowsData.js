/**
 *
 */
OilFlows = {
  "Status": "locked",
  "flows": [
    {
      "flow": "AHS",
      "info": {
        "Consumer": "AHS application",
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
      "flow": "CEASE",
      "info": {
        "Consumer": "CDB",
        "Interfaces": "HC6046",
        "Component": "OILCEASE",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB",
        "Documents": "OIL Analysis - Cease function (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=023250089\">023250089</a>)"
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
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)<br>OIL Analysis - OILMTMK_DISP (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=121800002\">121800002</a>)<br>P090084C MobileData - POM Notification Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=110180001\">110180001</a>)"
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
      "flow": "OLO",
      "info": {
        "Consumer": "NPA, Rosy (via AI)",
        "Interfaces": "HC6158",
        "Component": "OILPOM. Sends order to OMS and NGCOUT15 to OLO.",
        "ResponseFlow": "OMS->OILORDERNOTIF (HC6087)->ESB",
        "Documents": "OILPOM Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=151750001\">151750001</a>)"
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
      "flow": "PNI",
      "info": {
        "Consumer": "PNI",
        "Interfaces": "SubmitCustOrder<br> via ESB_DAEMON<br>bgc.services.oil.customerordering.v1",
        "Component": "OILPNI",
        "ResponseFlow": "OMS->OILNOTIF (HC6025)->OILPNI_DISP->ResponseDataSubmitCustomerOrdering<br>\nOMS->OILNOTIF (HC6025)->OILESB_DISP->ESB (CTG)<br>\nOMS->OILORDERNOTIF (HC6087)->ESB<br>",
        "Documents": "1548013D01 - PPNA - OIL Analysis  Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=163130001\">163130001</a>)<br><br><br>"
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
      "flow": "SEAP",
      "info": {
        "Consumer": "SEAP",
        "Interfaces": "HC6156",
        "Component": "OILSEAP",
        "ResponseFlow": "OMS->OILNOTIF (HC6025)->OILSEAP_DISP->SEAP<br>OMS->OILNOTIF (HC6025)->OILESB_DISP->ESB (CTG)<br>OMS->OILORDERNOTIF (HC6087)->ESB\n",
        "Documents": "OIL Analysis - OILSEAP (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=112730007\">112730007</a>)<br>OIL Analysis - OILSEAP_DISP_v1.2 (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=121780002\">121780002</a>)"
      }
    },
    {
      "flow": "TBF",
      "info": {
        "Consumer": "TBF",
        "Interfaces": "HC6085",
        "Component": "OILSOA",
        "ResponseFlow": "none. OILSOA->OILDARE_DISP->OLO (BGCOUT12)->Xml (MTS) or Email\n",
        "Documents": "OIL FD - CWS Bitstream access evolution (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=083010014\">083010014</a>)<br>OIL Analysis - CWS Bitstream access evolution (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=083010013\">083010013</a>)"
      }
    },
    {
      "flow": "IVR",
      "info": {
        "Consumer": "FMC ? (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
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
      "flow": "RHE",
      "info": {
        "Consumer": "RHE (BPM)",
        "Interfaces": "HC6082 (OHE in BMT!)",
        "Component": "OILEXTLOG",
        "ResponseFlow": "There is no response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "SHE",
      "info": {
        "Consumer": "SHE",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
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
      "flow": "OrderCompletion",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "OrderFulfilment",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "2651Process",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
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
      "flow": "Retry2646",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "RosyAsynch",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "RosyReportStatus",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    },
    {
      "flow": "RosyRetry",
      "info": {
        "Consumer": "IDTV (BPM)",
        "Interfaces": "HC6082",
        "Component": "OILEXTLOG",
        "ResponseFlow": "No response flow. OILEXTLOG allows non-OIL components to log into the OIL DB.",
        "Documents": "OIL FD - External Logging (<a target=\"_blank\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070850041\">070850041</a>)"
      }
    }
  ],
  "obsolete": {
    "doc": [
      {
        "name": "OIL FD - Voice over IP",
        "reference": "<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=052620045\">052620045</a>",
        "description": "This document describes the IMA flow. The document is last updated in 2006. "
      },
      {
        "name": "OIL FD - Dashboard",
        "reference": "<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=072980004\">072980004</a>",
        "description": "This document describes some initial requirements for an OIL dashboard function. No such function is in use today. Document last updated in February 2018."
      },
      {
        "name": "UC - Interface CNP - NPS",
        "reference": "<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031080051\">031080051</a>",
        "description": "The document descirbes the interface between CNP and NPS via HC6019."
      },
      {
        "name": "OIL Analysis - CNP-NPS Interface",
        "reference": "<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031250008\">031250008</a>",
        "description": "The document descirbes the interface between CNP and NPS via HC6019."
      },
      {
        "name": "OIL Analysis - OILBEACS",
        "reference": "<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=081840004\">081840004</a>",
        "description": "The document describes the specific development required for BEA to generate a cease order requests towards OMS-integration of BEA with OIL. The component OILBEACS is not used. Last document update in 2008."
      }
    ],
    "components": [
      {
        "name": "OIL_DYNAMIC_PARAMETERS",
        "config": "DB tables: <i>mail_template_dyn_param</i> is empty.",
        "doc": "",
        "interfaces": "none"
      },
      {
        "name": "OIL_SOA",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "",
        "interfaces": "none"
      },
      {
        "name": "MAILING_TEMPLATE",
        "config": "clearcase - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "MAILING_TEMPLATES",
        "config": "clearcase - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OIL",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILABR",
        "config": "clearcase - move to obsolete, ubbconfig, DB table: clear entry BatchABR in <i>dbcservices</i>",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: BatchABR, Files: ${FTPHOME}/OILABR/input"
      },
      {
        "name": "OILASN",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - Skynet-OMS-ASN-TOM (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=032040055\">032040055</a>)<br>OIL Analysis - ASN Phase Out (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=082620021\">082620021</a>)",
        "interfaces": "Tuxedo: BatchASN, refreshServices, WATCHDOG<br>Files: ${FTPHOME}/OILASN/input"
      },
      {
        "name": "OILASN_DAEMON",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - ASN Phase Out (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=082620021\">082620021</a>)",
        "interfaces": "Tuxedo: ASNTOM_DAEMON"
      },
      {
        "name": "OILASN_MAIL",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "",
        "interfaces": "none"
      },
      {
        "name": "OILBEACS",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - OILBEACS (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=081840004\">081840004</a>)",
        "interfaces": "Tuxedo: 6101"
      },
      {
        "name": "OILBOUNCE_DAEMON",
        "config": "clearcase - move to obsolete, DB table: clear entry BOUNCE_DAEMON in <i>dbcservices</i>",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: BOUNCE_DAEMON"
      },
      {
        "name": "OILBSD",
        "config": "clearcase - move to obsolete. Replaced by OILBST.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILCNPN_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - CNP Notification Framework (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031290053\">031290053</a>)",
        "interfaces": "Tuxedo: CNPNQ_NOTIFY"
      },
      {
        "name": "OILCNPD",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - CNP donor (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810014\">022810014</a>)",
        "interfaces": "Tuxedo: 6031 "
      },
      {
        "name": "OILCNPD_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - CNP Notification Framework (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031290053\">031290053</a>)",
        "interfaces": "Tuxedo: CNPDQ_NOTIFY"
      },
      {
        "name": "OILCNPR",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - CNP recipient (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810015\">022810015</a>",
        "interfaces": "Tuxedo: 6032"
      },
      {
        "name": "OILCNPR_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - CNP Notification Framework (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031290053\">031290053</a>)",
        "interfaces": "Tuxedo: CNPRQ_NOTIFY"
      },
      {
        "name": "OILDA_DISP",
        "config": "clearcase - move to obsolete, ubbconfig, DB tables: tbd.",
        "doc": "OIL Analysis DA <a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=070330032\">070330032</a>",
        "interfaces": "Tuxedo: DAQ_NOTIFY"
      },
      {
        "name": "OILDC_DAEMON",
        "config": "DB tables: <i>DC_STATUS</i>, <i>DC_SUBSCRIPTIONS</i>. Remove entry <i>DC_DAEMON</i> in table <i>DBCSERVICES</i>.<br>ubb config and server folders",
        "doc": "OILAnalysis - Dynamic Caching (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=051180094\">051180094</a>)<br>FD - Dynamic Caching crash proof OILDC_DAEMON (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=080370024\">080370024</a>)",
        "interfaces": "Tuxedo: DC_DAEMON"
      },
      {
        "name": "OILDEM",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - Demigration Phase Out (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=090070004\">090070004</a>)",
        "interfaces": "Tuxedo: BatchDEM"
      },
      {
        "name": "OILDEM_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - Demigration Phase Out (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=090070004\">090070004</a>)",
        "interfaces": "Tuxedo: DEMQ_NOTIFY"
      },
      {
        "name": "OILDES",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILCDBC",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILCDBECC",
        "config": "clearcase - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILIDMS",
        "config": "clearcase - move to obsolete, ubbconfig",
        "doc": "OIL Analysis - IDMS (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=042670048\">042670048</a>)",
        "interfaces": "OILIDMS_SERV"
      },
      {
        "name": "OILKGB_DAEMON",
        "config": "clearcase - move to obsolete.",
        "doc": "<a target=\"_default\" href=\"\"></a>",
        "interfaces": "KGB_DAEMON"
      },
      {
        "name": "OILMIP",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILMON",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILMON_DAEMON",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILMONLIB",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILMONQUE",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILMONQUE_DAEMON",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILMRB",
        "config": "clearcase - move to obsolete.",
        "doc": "UC - Monday Rollback (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=031920080\">031920080</a>)",
        "interfaces": "Tuxedo: RollbackData, RecoverData"
      },
      {
        "name": "OILMTC_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL Analysis - MTC (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=022810020\">022810020</a>)",
        "interfaces": "Tuxedo: MTCQ_NOTIFY"
      },
      {
        "name": "OILLQP",
        "config": "Clear case - move to obsolete. OIL DB table <i>dbservices</i> entry TIMER_DAEMON.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: HC5900, TIMER_DAEMON"
      },
      {
        "name": "OILLQPUP",
        "config": "Clear case - move to obsolete. ",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: HC5901"
      },
      {
        "name": "OILORACLE_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: ORACLEQ_NOTIFY"
      },
      {
        "name": "OILORBC",
        "config": "clearcase - move to obsolete?<br>ubbconfig<br>probably not used anymore.",
        "doc": "OIL Analysis - ORBC (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=030300011\">030300011</a>)",
        "interfaces": "Tuxedo: HC6048, HC6049, HC6050, HC6051, HC6052, HC6058, HC6066, HC6063"
      },
      {
        "name": "OILOSP",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "OIL FD - OILOSP (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=062280017\">062280017</a>)",
        "interfaces": "none"
      },
      {
        "name": "OILQCC",
        "config": "clearcase - move to obsolete<br>DB tables: qcc_queues, qcc_temp_storage.",
        "doc": "OIL Analysis - Queue Cleaning Component (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=052310021\">052310021</a>)<br>OIL FD - Queue Cleaning (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=052200099\">052200099</a>)",
        "interfaces": "Tuxedo: QCC_DAEMON, BatchQCC"
      },
      {
        "name": "OILREPORT",
        "config": "clearcase - move to obsolete<br>ubbconfig<br>DB table: clear entry REPORT_DAEMON in <i>dbcservices</i><br>probably not used anymore.",
        "doc": "OIL FD - OIL Reporting (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=041910218\">041910218</a>)",
        "interfaces": "Tuxedo: REPORT_DAEMON"
      },
      {
        "name": "OILROSY",
        "config": "clearcase - move to obsolete<br>ubbconfig<br>probably not used anymore.",
        "doc": "OIL Analysis - ROSY (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=050670102\">050670102</a>)",
        "interfaces": "Tuxedo: 6080"
      },
      {
        "name": "OILSARA",
        "config": "none - replaced by OILSARA_DAEMON during DEV phase.",
        "doc": "P111032 - Ease SMS Analysis  Design_ver1.5 (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=130090004\">130090004</a>)",
        "interfaces": "none"
      },
      {
        "name": "OILSCS_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL FD - SCS Sales Reporting (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=050260074\">050260074</a>)",
        "interfaces": "Tuxedo: SCSQ_NOTIFY"
      },
      {
        "name": "OILSKYNET",
        "config": "clearcase - move to obsolete<br>ubbconfig<br>DB table: clear entry <b>BatchSkynet</b> in <i>dbcservices</i>",
        "doc": "OIL Analysis - Skynet (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=023470084\">023470084</a>)<br>OIL Analysis - Skynet-OMS-ASN-TOM (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=032040055\">032040055</a>)",
        "interfaces": "Tuxedo: BatchSkynet"
      },
      {
        "name": "OILSKYNET_DISP",
        "config": "clearcase - move to obsolete<br>ubbconfig<br>",
        "doc": "OIL Analysis - Skynet (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=023470084\">023470084</a>)<br>OIL Analysis - Skynet-OMS-ASN-TOM (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=032040055\">032040055</a>)",
        "interfaces": "Tuxedo: SKYQ_NOTIFY"
      },
      {
        "name": "OILSP",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "P100020 - Multiservice Gateway Analysis & Design (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=110410005\">110410005</a>) stil mentions OILSP but this component is actually replaced by OILSP_DISP.<br>Notice that the feature with CatalogId 122231 that is subejct of this functionality is currently not used by the business.",
        "interfaces": "none"
      },
      {
        "name": "OILTCC",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      },
      {
        "name": "OILTOM",
        "config": "clearcase component - move to obsolete,<br>ubbconfig,<br>DB table: clear entry BatchTOM in <i>dbcservices</i>",
        "doc": "OIL Analysis - Skynet-OMS-ASN-TOM (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=032040055\">032040055</a>)",
        "interfaces": "Files: ${FTPHOME}/OILTOM/input"
      },
      {
        "name": "OILTOM_DAEMON",
        "config": "clearcase component - move to obsolete,<br>ubbconfig,<br>DB tables: clear entry TOM_DAEMON in <i>dbcservices</i>,<br>remove table <i>caching_tom</i>",
        "doc": "OIL Analysis - Skynet-OMS-ASN-TOM (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=032040055\">032040055</a>)",
        "interfaces": "Files: ${FTPHOME}/OILTOM_DAEMON/output"
      },
      {
        "name": "OILUTS_DISP",
        "config": "clearcase - move to obsolete.",
        "doc": "OIL FD - Voice over IP Activation and repair (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=062280018\">062280018</a>)",
        "interfaces": "Tuxedo: UTSQ_NOTIFY"
      },
      {
        "name": "OILUTS_DAEMON",
        "config": "clearcase - move to obsolete.<br>DB tables: remove table <i>uts_buffer</i>",
        "doc": "OIL FD - Voice over IP Activation and repair (<a target=\"_default\" href=\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=062280018\">062280018</a>)",
        "interfaces": "Tuxedo:  UTS_DAEMON"
      },
      {
        "name": "OILVOIP_DISP",
        "config": "clearcase - move to obsolete.<br>ubb config: <i>OILVOIPDISP</i>",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: VOIPQ_NOTIFY"
      },
      {
        "name": "OILVOUCHER",
        "config": "clearcase - move to obsolete<br>ubb config: <i>OILVOUCHER</i>",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: HC6099, ucher.\nAI: bgc.services.hub.hc9999.v1.1, bgc.services.oil.voucher.v2.0."
      },
      {
        "name": "OILWBILOG",
        "config": "clearcase - move to obsolete. Replaced by OILEXTLOG.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "Tuxedo: HC6082"
      },
      {
        "name": "OILXYZ",
        "config": "empty clearcase component - move to obsolete.",
        "doc": "<a target=\"_default\" href=\" \"></a>",
        "interfaces": "none"
      }
    ]
  },
  "projects": {
    "OIL": [
      {
        "projectid": "1693001D03",
        "name": "MTFB",
        "release": "2017 CRC10",
        "description": "",
        "doc": ""
      },
      {
        "projectid": "1573026D01",
        "name": "M3 SE Hc6103 ",
        "release": "2017 CRC06",
        "description": "",
        "doc": ""
      }
    ],
    "NWS": [
      {
        "projectid": "1344005D05",
        "name": "SCARLET - International Sports",
        "release": "2018 CRC02",
        "description": "Renaming of 11+ TV feature into International Sports.",
        "doc": "1344005D05 - OIL - detailed estimate (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=172350003\\\">172350003</a>). OIL NWS - Proximus TV Product Issues V18.docx (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=173460005\\\">173460005</a>)"
      },
      {
        "projectid": "1518026D01",
        "name": "FTTH WBA and Carrier enhancement",
        "release": "2018 CRC02",
        "description": "Adding product feature ISLA to offers Carrier FTTH and FTTH WBA shared VLAN.",
        "doc": "1518026D01- FTTH WBA and Carrier enhancement - OIL - detailed estimate _v0 Light. (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=173180001\\\">173180001</a>\") and other document in the project folder."
      },
      {
        "projectid": "1581010D03",
        "name": "FTTx fulfilment",
        "release": "2018 CRC02",
        "description": "3 new Order Rejections codes to be supported via existing flow and concepts of solution",
        "doc": "1581010D03- OIL - detailed estimate (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=172580008\\\">172580008</a>\"). Reason_codes v57.xlsx (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=173460002\\\">173460002</a>\")"
      },
      {
        "projectid": "1518900E35",
        "name": "OLO United Telecom",
        "release": "2017 Flex 09",
        "description": "OLO \"United Telecom\" (CDBID = 9586236) takes over DSL installations from OLO \"DT Belgium\" (CDBID = 613588420). ",
        "doc": "1518900E35 - OIL - detailed estimate (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=171770002\\\">171770002</a>)"
      },
      {
          "projectid": "1344005D04",
          "name": " Ordering via TV at Scarlete",
          "release": "2017 CRC08",
          "description": "Support Decoder V5 in OIL reference data.",
          "doc": "1344005D05 - OIL - detailed estimate (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=171800002\\\">171800002</a>)"
        },
      {
        "projectid": "1518900E35 ",
        "name": "update OLO : Meritel DLM optout",
        "release": "2017 Flex07",
        "description": "update OLO Meritel in OIL DB Reference data.",
        "doc": "1518900E35 - OIL - detailed estimate (<a target=\\\"_default\\\" href=\\\"http://panagonweb.bgc-grp.net/opc/ats_getdoc.aspx?Library=DMS^A00072&ID=171370010\\\">171370010</a>)"
      }
    ]
  }
}