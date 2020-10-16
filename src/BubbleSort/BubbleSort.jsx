import React from 'react';
import './BubbleSort.css';
import { render } from '@testing-library/react';
 
//to do:
//1) fix clear timeout. Reset button should stop everything including animation - DONE.
//2) set the colors right -DONE
//3) design the UI - kinda...?

//problems:
//1)if i change the size of the array the set timeout function gets even more delayed and 
//it messes up the color change

export default class BubbleSort extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
            isSorted: false,
        };
    }

componentDidMount(){
    this.reset();
}

reset() {
    //enable bubble sort button
    document.getElementById("freezeBtn").disabled = false;

    //clear timeout
    var highTimeOut = setTimeout(';');
    for (var i = 0; i < highTimeOut; i++) {
      clearTimeout(i);
    }
    //clear array
    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push(randomIntFromInterval(1, 500));
    }
    this.setState({array});

    //clear color
    this.resetColor(array);

    return array;
}

resetColor(){
    const arr = this.state.array;
    const array = document.getElementsByClassName('array-bar');
    for(let i = 0; i < arr.length; i++){
        array[i].style.backgroundColor = 'rgb(182, 155, 224)';               
    }
}

bubble_sort() {

    //disable the buttin while bubble sort is running
    document.getElementById("freezeBtn").disabled = true;

    const array = document.getElementsByClassName('array-bar');
    const arr = this.state.array;
       for (let i = 0; i < arr.length; i++) {

          setTimeout(() => {

                for (let j = 0; j < arr.length - 1 - i; j++) {
                    
                    //comparing two elements - change color
                      setTimeout(() =>{
                        array[j].style.backgroundColor = 'rgb(182, 155, 224)';
                        array[j+1].style.backgroundColor = 'rgb(182, 155, 224)';
                    },  (j+1) *120);

                    // if swapping needed
                     setTimeout(() =>{
                        if (arr[j] > arr[j + 1]) {
                            const temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;

                            //change height
                            array[j].style.height = `${arr[j]}px`;
                            array[j+1].style.height = `${temp}px`;
                        }
                         else{
                             array[j].style.backgroundColor = 'rgb(148, 42, 148)';
                             array[j+1].style.backgroundColor = 'rgb(148, 42, 148)';
                         }
                    },(j+1) *100);   

                    setTimeout(() =>{
                        array[j].style.backgroundColor = 'rgb(148, 42, 148)';
                        array[j+1].style.backgroundColor = 'rgb(148, 42, 148)';
                    },  (j+1)* 100);

                }
            }, i * arr.length * 100);
        }
}

 render() {

    const {array} = this.state;
    return (
        <div className="*">
            <div className="title">Bubble Sort Visualizer</div>
        <div className = "array-container">

        {array.map((value, idx) => (
                <div
                className="array-bar"
                key = {idx}
                style={{height: `${value}px`}}>
                </div>
        ))}
            <div>
                <button className="button" onClick={() => this.reset()}>Reset</button>
                <button className="button" id="freezeBtn" onClick={() => this.bubble_sort()}>Sort Me</button>

            </div>
        </div>
        </div>
    );
}

}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
