export interface Messages {
	[ messageKey: string ]: string|Record<string, any>;
}

export interface BananaOptions {
	messages?: Messages;
	finalFallback?: string;
}

export interface BananaConstructor {
	new ( locale: string, options?: BananaOptions ): Banana;
}

export type MessageSource = Record<string, Messages>;

export type ParameterType = string|object|number|undefined;

export interface Banana {
	locale: string;
	load( messsageSource: MessageSource, locale?: string ): void;
	i18n( key: string, ...params: ParameterType[] ): string;
	setLocale( locale: string ): void;
	getFallbackLocales(): string[];
	getMessage( messageKey: string ): string;
	registerParserPlugin( name: string, plugin: ((nodes: ParameterType[]) => string) ): void;
}

export const Banana: BananaConstructor;
