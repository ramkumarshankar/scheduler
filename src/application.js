/* main.js
 *
 * Copyright 2020 Ramkumar Shankar
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

pkg.initGettext();
pkg.initFormat();
pkg.require({
  'Gio': '2.0',
  'Gtk': '3.0'
});

const { Gio, Gtk } = imports.gi;

const { SchedulerWindow } = imports.window;

class SchedulerApp {
    constructor() {
        this.app = new Gtk.Application({
            application_id: 'me.ramkumar.scheduler',
            flags: Gio.ApplicationFlags.FLAGS_NONE
        });
        this.app.connect('activate', this._onActivate.bind(this));
        this.app.connect('startup', this._onStartup.bind(this));
        this.appWindow = null;
    }

    _onActivate() {
        //
        this.appWindow.present();
    }

    _onStartup() {
        //
        if (!this.appWindow) {
            this.appWindow = new SchedulerWindow(this.app);
        }
    }
}
