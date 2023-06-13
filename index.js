// code your solution here
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function wrapAdjective(highlight='*') {
    return (function (adjective = 'special') {
        return `You are ${highlight}${adjective}${highlight}!`;
    })
}