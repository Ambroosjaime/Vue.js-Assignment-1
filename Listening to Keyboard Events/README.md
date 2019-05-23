
Key Modifiers
==============================

When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for v-on when listening for key events:

<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input v-on:keyup.enter="submit">
You can directly use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case.

<input v-on:keyup.page-down="onPageDown">
In the above example, the handler will only be called if $event.key is equal to 'PageDown'.

==================================================================================================