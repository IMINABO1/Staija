// cards

let activeIndex=0;

const groups = document.getElementsByClassName("card-group");

const handleRightClick = () => {
    //bump active index
    //console.log(5);
    const nextIndex= activeIndex +1 <= groups.length-1 ? activeIndex+1 :0;

    const currentGroup= document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //Active group becomes after
    currentGroup.dataset.status ="after";


    //next group becomes active
    nextGroup.dataset.status="becoming-active-from-before";

    setTimeout(()=> {
        nextGroup.dataset.status="active";
        activeIndex=nextIndex;
    });

    

    console.log(activeIndex);
}

const handleLeftClick = () => {
    //bump active index
    //console.log(5);
    const nextIndex= activeIndex -1 >=0 ? activeIndex-1 : groups.length-1 ;

    const currentGroup= document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    //Active group becomes after
    currentGroup.dataset.status ="before";


    //next group becomes active
    nextGroup.dataset.status="becoming-active-from-after";

    setTimeout(()=> {
        nextGroup.dataset.status="active";
        activeIndex=nextIndex;
    });

    

    console.log(activeIndex);
}

function carousel() {
    return {
        currentIndex: 0,
        cards: [
            { image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 1', description: 'Description for Card 1' },
            { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 2', description: 'Description for Card 2' },
            { image: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 3', description: 'Description for Card 3' },
            { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 4', description: 'Description for Card 4' },
            { image: 'https://plus.unsplash.com/premium_vector-1682269284255-8209b981c625?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 5', description: 'Description for Card 5' },
            { image: 'https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 6', description: 'Description for Card 6' },
            { image: 'https://plus.unsplash.com/premium_vector-1682269282372-6d888f3451f1?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 7', description: 'Description for Card 7' },
            { image: 'https://plus.unsplash.com/premium_vector-1711987772726-64785d1bade8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Card 8', description: 'Description for Card 8' },
        ],
        next() {
            handleRightClick();
            if (this.currentIndex < this.cards.length - 1) {
                this.currentIndex++;
            }
        },
        prev() {
            handleLeftClick();
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        }
    }
}