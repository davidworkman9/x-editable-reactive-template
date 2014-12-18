x-editable-reactive-template
===========================
*Reactive*, template wrapper around x-editable.
This package assumes you've loaded x-editable yourself one option is [natestrauser:x-editable-bootstrap](https://github.com/nate-strauser/meteor-x-editable-bootstrap). But, as long as it's loaded before an x-editable template is attempted to be rendered you should be fine.

# Install

```
meteor add workman:x-editable-reactive-template
```

# Usage

#### Options

The options for the template are the same [options you have for x-editable](http://vitalets.github.io/x-editable/docs.html#editable).
They can be reactive, the template will initialize x-editable once, and only update what's changed. No flash from destroying/re-initializing when variables change.

#### Template
    {{> xEditable type="text" success=onSuccess placement="right" }}

#### JS
    Template.hello.helpers({
        onSuccess: function () {
            var id = this._id;
            return function (res, val) {
                MyColl.update({ _id: id }, { $set: { prop: val } });
            }
        }
    });
