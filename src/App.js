import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';


class App extends React.Component {
    state = {
        players: [
            { name: '홍길동', id: 1},
            { name: '홍길서', id: 2},
            { name: '홍길남', id: 3},
            { name: '홍길북', id: 4},
        ]
    };

    constructor() {
        super();
    }

    /* 자식에게 내려보낼 콜백함수
    *
    * */
    handleRemovePlayer = (id) => {
        console.log('handleRemovePlayer', id);
        // 해당하는 id를 삭제하는 로직
        /* filter()
        *  주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
        * */
        this.setState(prevState => {
            // return { players: prevState.players.filter(item => item.id !== id) }
            const players = prevState.players.filter(item => item.id !== id);
            return { players }   // ES6 short hand property: 키와 값이 같으면 한쪽을 생략할 수 있다.
        });
    };

    render(){
        return (
            <div className="scoreboard">
                <Header title="My Scoreboard" totalPlayers="11" />
                {
                    this.state.players.map((item) => (
                        <Player
                            key={item.id} id={item.id} name={item.name}
                            removePlayer={this.handleRemovePlayer}
                        />)
                    )
                }
            </div>
        );
    };
}

export default App;
