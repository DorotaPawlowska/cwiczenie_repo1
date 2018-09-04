import React from 'react';

const Ninjas = ({ninjas}) => {
    // console.log(this.props);
    // const { ninjas } = props; // destrukturyzacja
    // const ninjaList = ninjas.map( ninja => {
    //     if(ninja.age > 20){
    //         return (
    //         <div className="ninja" key={ninja.id}>
    //             <div> Name: { ninja.name } </div>
    //             <div> Age: { ninja.age } </div>
    //             <div> Belt: { ninja.belt } </div>
    //         </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })

    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ninja.id}>
    //             <div> Name: { ninja.name } </div>
    //             <div> Age: { ninja.age } </div>
    //             <div> Belt: { ninja.belt } </div>
    //         </div>
    //     ) : null;
    // })

    return (
        <div className="ninja-list">
        {/* { ninjaList} albo to co jest na dole */}
        {
            ninjas.map(ninja => {
                return ninja.age > 20 ? (
                    <div className="ninja" key={ninja.id}>
                        <div> Name: { ninja.name } </div>
                        <div> Age: { ninja.age } </div>
                        <div> Belt: { ninja.belt } </div>
                    </div>
                ) : null;
            })
        }
        </div>
    )
}

export default Ninjas;