# videojs-prebid-outstream

## Getting Started

Add `videojs-prebid-outstream` plugin to your npm project. Currently, it is not hosted as a package on npm yet so it can be added as a git package.
```
{
  "name": "app",
  "version": "0.0.1",
  "description": "My app",
  "main": "index.js",
  "dependencies": {
    "@prebid/videojs-vast-outstream": "git+https://github.com/redbrickmedia/videojs-prebid-outstream.git#main",
    "video.js": "^7.11.8"
  }
}
```

After adding the plugin to the project, initialize the plugin with videojs using
```
import registerOutstreamPlugin from '@prebid/videojs-vast-outstream';

if(!videojs.getPlugin('outstream')) {
    registerOutstreamPlugin(videojs);
}
```

Config parameters can be passed into the plugin when initializing the player
```
videojs(videoPlayerId, {
    plugin: {
        outstream: {
            ...options
        }
    }
});
```

or with a call directly to the plugin
```
const player = videojs(videoPlayerId, {}});
player.outstream(options)
```

## Configuration
The plugin uses https://github.com/dailymotion/vast-client-js as the vast parser so it accepts any of the following options:

| Key                               | Type                 | Default   | Required?          | Description                                                                                       |
|-----------------------------------|----------------------|-----------|--------------------|---------------------------------------------------------------------------------------------------|
| adTagUrl                          | string               | ''        | :heavy_check_mark: | Required if `adXml` is not specified. This should be a url to a VAST response                     |
| adXml                             | string               | ''        | :heavy_check_mark: | Required if `adTagUrl` is not specified. This should be a raw string of the VAST document         |
| debug                             | boolean              | false     |                    | Shows plugin debug information in console                                                         |
| useVPAID                          | boolean              | true      |                    | Enables VPAID ads to render                                                                       |
| showClose                         | boolean              | true      |                    | Shows a close button overlay on every ad                                                          |
| maxVPAIDAdStart                   | boolean              | true      |                    | Maximum time for VPAID ad to start before we consider it an error                                 |
| timeout                           | number               | 0         |                    | A custom timeout for the requests                                                                 |
| withCredentials                   | boolean              | false     |                    | A boolean to enable the withCredentials options for the XHR and FLASH URLHandlers                 |
| wrapperLimit                      | number               | 0         |                    | A number of Wrapper responses that can be received with no InLine response                        |
| urlHandler                        | VASTClientUrlHandler | undefined |                    | Custom urlhandler to be used instead of the default ones urlhandlers                              |
| resolveAll                        | boolean              | false     |                    | Allows you to parse all the ads contained in the VAST or to parse them ad by ad or adPod by adPod |
| adControls                        | object               | n/a       |                    | Sets the controls that you want visible while displaying an outstream ad                          |
| adControls.volumePanel            | boolean              | true      |                    | Shows volume control panel                                                                        |
| adControls.playToggle             | boolean              | false     |                    | Shows play button                                                                                 |
| adControls.captionsButton         | boolean              | true      |                    | Shows captions button                                                                             |
| adControls.chaptersButton         | boolean              | false     |                    | Shows chapters button                                                                             |
| adControls.subtitlesButton        | boolean              | false     |                    | Shows subtitles                                                                                   |
| adControls.remainingTimeDisplay   | boolean              | true      |                    | Shows remaining time for ad                                                                       |
| adControls.progressControl        | boolean              | false     |                    | Allows ad seeking, control over ad progress                                                       |
| adControls.fullscreenToggle       | boolean              | false     |                    | Shows fullscreen button                                                                           |
| adControls.playbackRateMenuButton | boolean              |           | false              | Shows bitrate change button                                                                       |
| adControls.pictureInPictureToggle | boolean              |           | false              | Shows picture in picture button                                                                   |
| adControls.currentTimeDisplay     | boolean              | false     |                    | Shows current time in video                                                                       |
| adControls.currentTimeDisplay     | boolean              | false     |                    | Shows current time in video                                                                       |
| adControls.timeDivider            | boolean              | false     |                    | Shows time divider                                                                                |
| adControls.durationDisplay        | boolean              | false     |                    | Shows duration of video                                                                           |
| adControls.liveDisplay            | boolean              | false     |                    | Shows live feed button                                                                            |
| adControls.seekToLive             | boolean              | false     |                    | Shows seek to live button                                                                         |
| adControls.customControlSpacer    | boolean              | false     |                    | Shows custom control spacer                                                                       |
| adControls.descriptionsButton     | boolean              | false     |                    | Shows video description button                                                                    |
| adControls.subsCapsButton         | boolean              | false     |                    | Shows sub caps button                                                                             |
| adControls.audioTrackButton       | boolean              | false     |                    | Shows audio track button                                                                          |

## Contributing

See [CONTRIB](https://github.com/redbrickmedia/videojs-prebid-outstream/blob/main/CONTRIB.md)