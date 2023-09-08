import React, { Component } from 'react'
import BackGround from './glassesImage/background.jpg'
import ImgModel from './glassesImage/model.jpg'
import { GlassesErr } from './dataGlasses'
import ListGlasses from './ListGlasses'
import GlasessShow from './GlasessShow'
export default class BannerComponent extends Component {
    state = {
        GlassesArr1 : GlassesErr,
        GlassesShow :[]
    }
    // renderListGlasses = () => { 
    //     return GlassesErr.map((item,index) => { 
    //         return (
    //             <div key={index} className="card bg-white mr-4 mb-3" style={{border: "1px solid black",width:"100px", height:"50px",justifyContent:"center"}}>
    //                     <a href="#" type=''><img src={item.url} alt="" style={{width:"100%"}}/></a>
    //             </div>
    //         )
    //      })
    //  }
    handleAddGlass = (item) => { 
        let Glasses = this.state.GlassesShow
        Glasses.forEach((item,index) => { 
            if (Glasses.length >= 1 ) {
                Glasses.splice(index,1)
            }
         })
        Glasses.push(item)
        this.setState({
            GlasessShow: Glasses
        })
        console.log(item);
     }
    render() {
        return (
            <div style={{ backgroundImage: `url(${BackGround})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundPosition: "top center ", backgroundSize: "cover",position:"relative"}}>
                <section>
                    <div className="container" style={{position : "absolute",bottom:"20%",left:"10%"}} >
                        <div className="row">
                            <div className="col-6">
                                <img src={ImgModel} alt="" style={{ height: "225px",position:"relative"}} />
                                <GlasessShow  showGlass={this.state.GlassesShow}/>
                            </div>
                            <div className="col-6">
                                <img src={ImgModel} alt="" style={{ height: "225px" }} />
                            </div>
                            <div className="col-12" style={{height:"200px",backgroundColor:"rgba(0,0,0,0.6)"}}>
                                <div className="container d-flex mt-5" style={{flexWrap: "wrap"}}>
                                    <ListGlasses list={this.state.GlassesArr1} handleAddGlass ={this.handleAddGlass}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
// ./glassesImage/background.jpg