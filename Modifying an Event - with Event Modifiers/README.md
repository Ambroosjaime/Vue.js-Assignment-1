Event Modifiers:
======================
It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.

To address this problem, Vue provides event modifiers for v-on. Recall that modifiers are directive postfixes denoted by a dot.

.stop
.prevent
.capture
.self
.once
.passive

<!-- the click event's propagation will be stopped -->
<!--a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<!--form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<!--a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<!--form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<!--div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<!--div v-on:click.self="doThat">...</div>

https://vuejs.org/v2/guide/events.html#Event-Modifiers

=================================================================================================



