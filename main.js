'use strict';
var opts = [
    "ajaxOptions",
    "anim",
    "autotext",
    "defaultValue",
    "disabled",
    "display",
    "emptyclass",
    "emptytext",
    "error",
    "highlight",
    "mode",
    "name",
    "onblur",
    "params",
    "pk",
    "placement",
    "savenochange",
    "selector",
    "send",
    "showbuttons",
    "source",
    "success",
    "toggle",
    "type",
    "unsavedclass",
    "url",
    "validate",
    "value"
];

Template.xEditable.rendered = function () {
    var tmpl = this,
        lastData = tmpl.data,
        $input = tmpl.$('.x-editable-meteorized');
    tmpl.editable = $input.editable(tmpl.data);
    tmpl.autorun(function () {
        var data = Blaze.getData();
        var changedOpts = _.filter(Object.keys(data), function (opt) {
            return opts.indexOf(opt) !== -1 && !_.isEqual(lastData[opt], data[opt]);
        });
        lastData = data;

        Deps.afterFlush(function () {
            _.each(changedOpts, function (opt) {
                $input.editable('option', opt, data[opt]);
            });
        });
    });
};
