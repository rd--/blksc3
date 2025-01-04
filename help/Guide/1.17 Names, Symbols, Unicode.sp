/* Names, Symbols, Unicode */
Impulse(SinOsc(1, 0).Max(0), 0) * 0.1

# Names, Symbols, Unicode

Requiring blocks to have both _proper names_ and a _message template_ allows blocks to be translated into different languages.

It also allows blocks to be displayed using symbolic notations that would not be allowed as identifiers in _.sl/.stc_.

“ is the message indicating a _Comment_ block, ▷ a _Play_ block, ∿ a _SinOsc_ block and ⊥ an _Impulse_ block.

ν is the symbol used in messages to indicate a _frequency_ parameter, ϕ a _phase_ parameter, × a _multiply_ parameter and + an _add_ parameter.

⌈ is the symbol used in messages to indicate the _Max_ binary operator.
(It also indicates the _Ceiling_ unary operator).

Symbolic names for common blocks and parameters make graphs drawings much more concise.
These names do not ever need to be typed, only recognised.

The block editor allows for translations of messages.
It would be possible to add alternate message notations, either using different symbols, or plain text.

This program generates a quiet impulse stream of time varying frequency in the left channel.
