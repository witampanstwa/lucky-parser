const MatchExpressions = {
    NEXT_SCOPE_POINTER: {
        VERBOSE: /&lt;-/,
        RENDERED: /<-/
    },
    STARTING_TAG: {
        VERBOSE: /(&lt;)(\w+)(.*)/,
    },
    ENDING_TAG: {
        VERBOSE: /(.*?)(\w+)(&gt;$)/,
    },
    TAG_UNCLOSED: ``,
    TAG_SCRAMBLE_ABSTRACT: /<\s*(\w+)(.*?)>/g,
    TAG_SCRAMBLE_ASSOCIATIVE_PROPERTIES: /(\w+)=(\w+)/g,
    TAG_SCRAMBLE_LOOSE_PROPERTIES: /\s+((?:".*?")|(?:[^\s]+))/g,
    ALL_UNTIL_NEXT_SCOPE: {
        VERBOSE: /(.*)&lt;-$/s,
        RENDERED: /(.*)<-$/s,
    },
}
