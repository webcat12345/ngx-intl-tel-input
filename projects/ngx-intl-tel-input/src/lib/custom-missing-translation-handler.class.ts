import { MissingTranslationHandler, MissingTranslationHandlerParams } from "@ngx-translate/core";
import { defaultCountryTranslations, translationPrefix } from "./data";

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {

    const {key} = params;
    const [_, code] = key.split('.');

    const defaultTranslation = defaultCountryTranslations[translationPrefix][code];
    return defaultTranslation;
  }
}
