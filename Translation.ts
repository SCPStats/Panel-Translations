import EN from "./langs/en";
import RU from "./langs/ru";
import CS from "./langs/cs";
import PL from "./langs/pl";
import IT from "./langs/it";
import TH from "./langs/th";

require("dayjs/locale/en");
require("dayjs/locale/ru");
require("dayjs/locale/cs");
require("dayjs/locale/pl");
require("dayjs/locale/it");
require("dayjs/locale/th");

export interface Translation {
    this_lang: string;
    loading: string;
    redirecting: string;
    success: string;
    error: string;
    errorOccurred: string;
    servers: string;
    warnings: string;
    createWarning: string;
    ipBans: string;
    createIPBan: string;
    bans: string;
    createBan: string;
    playerTitle: string;
    issuerTitle: string;
    idVal: string;
    issuerVal: string;
    playerVal: string;
    reasonVal: string;
    issuedVal: string;
    expiresVal: string;
    serverConsole: string;
    unknown: string;
    unpardon: string;
    unpardonSuccess: string;
    pardon: string;
    pardonSuccess: string;
    delete: string;
    deleteSuccess: string;
    confirmTitle: string;
    confirmMessage: string;
    confirm: string;
    cancel: string;
    invalidIP: string;
    invalidIPDesc: string;
    invalidID: string;
    invalidIDDesc: string;
    invalidDuration: string;
    invalidDurationDesc: string;
    createBanSuccess: string;
    createWarningSuccess: string;
    ip: string;
    ipHint: string;
    id: string;
    idHint: string;
    duration: string;
    durationHint: string;
    reason: string;
    reasonHint: string;
    submit: string;
    edit: string;
    editBan: string;
    editBanSuccess: string;
    editWarning: string;
    editWarningSuccess: string;
    profile: string;
    language: string;
    logout: string;
    searchHint: string;
    playtime: string;
    lastSeen: string;
    myPlaytime: string;
    playtimeTitle: string;
    staffPlaytime: string;
    lookupPlayer: string;
    lookupIssuer: string;
    reports: string;
    warning: string;
    ban: string;
    report: string;
    cheaterReport: string;
    players: string;
    name: string;
    names: string;
    lastJoin: string;
    lastLeave: string;
    firstJoin: string;
    firstLeave: string;
    myServers: string;
    viewSecret: string;
    changeName: string;
    resetSecret: string;
    viewSecretMsg1: string;
    viewSecretMsg2: string;
    changeNameNewName: string;
    resetSecretMsg: string;
    changeNameSuccess: string;
    resetSecretSuccess: string;
    createServer: string;
    createServerMsg: string;
    createServerSuccess: string;
    linkToDiscord: string;
    linkToDiscordMsg1: string;
    linkToDiscordMsg2: string;
    linkToDiscordCmd: string;
}

export const Translations: Record<string, Translation> = {
    "en": EN,
    "ru": RU,
    "cs": CS,
    "pl": PL,
    "it": IT,
    "th": TH
};