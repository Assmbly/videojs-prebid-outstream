import videojs, { VideoJsPlayer } from 'video.js';

const Button = videojs.getComponent('button');

// implement our Button
export class VideoJsExampleButton extends Button {
    static defaultOptions: VideoJsExamplePluginOptions = {
        label: 'Default Label',
        message: 'Default Message',
    };

    private exampleOptions: VideoJsExamplePluginOptions;

    constructor(player: VideoJsPlayer, exampleOptions: Partial<VideoJsExamplePluginOptions> = {}) {
        super(player);

        this.exampleOptions = {
            ...VideoJsExampleButton.defaultOptions,
            ...exampleOptions,
        };

        this.el().innerHTML = this.exampleOptions.label;
    }

    createEl(tag = 'button', props = {}, attributes = {}) {
        const el = super.createEl(tag, props, attributes);
        return el;
    }

    handleClick() {
        alert(this.exampleOptions.message);
    }
}

videojs.registerComponent('exampleButton', VideoJsExampleButton);

const Plugin = videojs.getPlugin('plugin');

// implement the plugin that adds the button the the controlBar
export class VideoJsExamplePlugin extends Plugin {
    constructor(player: VideoJsPlayer, options?: VideoJsExamplePluginOptions) {
        super(player);
        player.ready(() => {
            player.controlBar.addChild('exampleButton', options);
        });
    }
}

videojs.registerPlugin('examplePlugin', VideoJsExamplePlugin);

declare module 'video.js' {
    // tell the type system our plugin method exists...
    export interface VideoJsPlayer {
        examplePlugin: (options?: Partial<VideoJsExamplePluginOptions>) => VideoJsExamplePlugin;
    }
    // tell the type system our plugin options exist...
    export interface VideoJsPlayerPluginOptions {
        examplePlugin?: Partial<VideoJsExamplePluginOptions>;
    }
}

export interface VideoJsExamplePluginOptions {
    label: string;
    message: string;
}
