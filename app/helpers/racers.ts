export function generateRacerWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfRacerWinning = Math.random();

    return (callback: (arg0: number) => void) => {
        setTimeout(() => {
            callback(likelihoodOfRacerWinning);
        }, delay);
    };
}

export function getRacerInitials(name: string) {

    if (!name) {
        return ''
    }

    let label = name.replace(/[^\w\s]/, "")

    const hasLastname = label.lastIndexOf(' ') + 1
    const firstnameInitial = label.substring(0, 1).toUpperCase()

    let result = firstnameInitial

    if (hasLastname > 0) {
        const lastnameInitial = label.substring(hasLastname, hasLastname + 1).toUpperCase()
        result =  `${firstnameInitial} ${lastnameInitial}`
    }

    return result;
}

export function sortByLikelihood(a: number = 0, b: number = 0){
    return b - a
}