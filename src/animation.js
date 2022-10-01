export const pageAnimation = {
    hidden: {
        opacity: 1,
        y: 300,
    },
    show: {
        opcaity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const projectPageAnimation = {
    hidden: {
        opacity: 1,
        y: 300,
    },
    show: {
        opcaity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleAnim = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        y:0,
        opacity: 1,
        transition: {duration: 0.75, ease: "easeOut"}
    }
}

export const fade = {
    hidden:  {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: "easeOut", duration: 0.75}
    }
}

export const photoAnim = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75,
        }
    }
}

export const lineAnim = {
    hidden: {width: '0%'},
    show: {
        width: '100%',
        transition: {duration: 1},
    }
}

export const frameTrans = {
    show: {
        x: '100%',
        transition: { ease: 'easeOut', duration: 2}
    }
}

export const frameTransContainer = {
    hidden: {opacity: 1},
    show: {opacity: 1, transition: {staggerChildren: 3, ease: 'easeOut'}}
}

export const scrollReveal = {
    hidden: {opacity: 0, scale: 1.2, transition:{duration: .7}},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .7,
        }
    }
}