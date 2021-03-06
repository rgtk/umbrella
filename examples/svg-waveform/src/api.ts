import { IObjectOf } from "@thi.ng/api/api";
import { ViewTransform, IView } from "@thi.ng/atom/api";
import { EventDef, EffectDef } from "@thi.ng/interceptors/api";
import { EventBus } from "@thi.ng/interceptors/event-bus";

/**
 * Function signature for main app components.
 */
export type AppComponent = (ctx: AppContext, ...args: any[]) => any;

/**
 * Derived view configurations.
 */
export type ViewSpec = string | [string, ViewTransform<any>];

/**
 * Structure of the overall application config object.
 * See `src/config.ts`.
 */
export interface AppConfig {
    events: IObjectOf<EventDef>;
    effects: IObjectOf<EffectDef>;
    domRoot: string | Element;
    initialState: any;
    rootComponent: AppComponent;
    ui: UIAttribs;
    views: Partial<Record<keyof AppViews, ViewSpec>>;
}

/**
 * Base structure of derived views exposed by the base app.
 * Add more declarations here as needed.
 */
export interface AppViews extends Record<keyof AppViews, IView<any>> {
    amp: IView<number>;
    freq: IView<number>;
    phase: IView<number>;
    harmonics: IView<number>;
    hstep: IView<number>;
}

/**
 * Helper interface to pre-declare keys of shared UI attributes for
 * components and so enable autocomplete & type safety.
 *
 * See `AppConfig` above and its use in `src/config.ts` and various
 * component functions.
 */
export interface UIAttribs {
    button: any;
    buttongroup: any;
    footer: any;
    link: any;
    slider: { root: any, range: any, number: any };
    root: any;
    sidebar: any;
    waveform: any;
}

/**
 * Structure of the context object passed to all component functions
 */
export interface AppContext {
    bus: EventBus;
    views: AppViews;
    ui: UIAttribs;
}
