//Header section Animations

export const headerAnimation = {
    hidden: {
        opacity: 0,
        y: "-50%"
    },
    visible: {
        opacity: 1,
        y: "0%",
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 8
        }
    }
};
export const menuMobile = {
    hidden: {
        x: -100,
        y: -100
    },

    visible: {
        x: 0,
        y: 0,

        transition: {
            type: "spring",
            bounce: 0
        }
    },

    exit: {
        x: -100,
        y: -100
    }
};

//Intro Animation

export const introduction = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, staggerChildren: 3 }
    }
};

export const header = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

export const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export const btnAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 50, delay: 3 }
    }
};

//

//About section Animations
export const aboutAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};
export const aboutImage = {
    hidden: {
        x: "-100%"
    },
    visible: {
        x: "0%",
        transition: {
            type: "spring",
            stiffness: 30
        }
    }
};
export const aboutInfo = {
    hidden: {
        x: "110%"
    },
    visible: {
        x: "0%",
        transition: {
            type: "spring",
            stiffness: 30
        }
    }
};

//Works section Animations

export const allProjectsAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};

export const projectAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

/*Contact animations */

export const contactAnimation = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffeness: 70,
            delay: 0.5
        }
    }
};

export const footerAnimation = {
    hidden: {
        opacity: 0,
        y: "50%"
    },
    visible: {
        opacity: 1,
        y: "0%",
        transition: {
            type: "spring",
            bounce: 0
        }
    }
};
