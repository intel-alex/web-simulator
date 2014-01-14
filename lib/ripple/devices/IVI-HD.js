/*
 *  Copyright 2012 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
    "id": "IVI-HD",
    "name": "IVI HD (800x480)",
    "osName": "Generic",
    "osVersion": "Generic",
    "manufacturer": "Tizen",
    "model": "Generic",
    "uuid": "42",
    "firmware": "Generic",

    "screen": {
        "width": 800,
        "height": 480
    },
    "viewPort": {
        "portrait": {
            "width": 1024,
            "height": 640,
            "paddingTop": 0,
            "paddingLeft": 0
        },
        "landscape": {
            "width": 640,
            "height": 1024,
            "paddingTop": 0,
            "paddingLeft": 0
        }
    },

    "ppi": 316,
    "browser": ["Generic"],
    "platforms": ["ivi"],
    "userAgent": "Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/533.2 (KHTML, like Gecko) Chrome/5.0.342.7 Safari/533.2"
};