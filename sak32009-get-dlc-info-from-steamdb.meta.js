﻿// ==UserScript==
// @name             Get DLC Info from SteamDB
// @namespace        sak32009-get-dlc-info-from-steamdb
// @description      Get DLC Info from SteamDB.
// @author           Sak32009
// @contributor      CS.RIN.RU Users
// @version          3.1.0
// @license          MIT
// @homepageURL      https://github.com/Sak32009/GetDLCInfoFromSteamDB
// @supportURL       http://cs.rin.ru/forum/viewtopic.php?f=10&t=71837
// @updateURL        https://github.com/Sak32009/GetDLCInfoFromSteamDB/raw/master/sak32009-get-dlc-info-from-steamdb.meta.js
// @downloadURL      https://github.com/Sak32009/GetDLCInfoFromSteamDB/raw/master/sak32009-get-dlc-info-from-steamdb.user.js
// @icon             data:image/png;base64,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
// @match            *://steamdb.info/app/*
// @grant            none
// @run-at           document-end
// @noframes
// ==/UserScript==
