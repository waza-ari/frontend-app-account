import arMessages from './messages/ar.json';
import dedeMessages from './messages/de_DE.json';
import es419Messages from './messages/es_419.json';
import faIRMessages from './messages/fa_IR.json';
import frMessages from './messages/fr.json';
import frCAMessages from './messages/fr_CA.json';
import hiMessages from './messages/hi.json';
import itMessages from './messages/it.json';
import ptMessages from './messages/pt.json';
import ruMessages from './messages/ru.json';
import ukMessages from './messages/uk.json';
import zhcnMessages from './messages/zh_CN.json';
import dedeCAMessages from './messages/de_DE.json';
import ititCAMessages from './messages/it_IT.json';
import ptptCAMessages from './messages/pt_PT.json';
// no need to import en messages-- they are in the defaultMessage field

const messages = {
  ar: arMessages,
  'es-419': es419Messages,
  'fa-ir': faIRMessages,
  fr: frMessages,
  'zh-cn': zhcnMessages,
  pt: ptMessages,
  it: itMessages,
  'de-de': dedeMessages,
  hi: hiMessages,
  'fr-ca': frCAMessages,
  ru: ruMessages,
  uk: ukMessages,
  'de-de': dedeCAMessages,
  'it-it': ititCAMessages,
  'pt-pt': ptptCAMessages,
};

export default messages;
