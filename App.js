import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Button, Image, TouchableWithoutFeedback} from 'react-native';

export default class PrimeiroProjeto extends Component{

    constructor(props) {
        super(props);
        this.state = {consumido:0, status:'Ruim', pct:'0'};

        this.addCopo = this.addCopo.bind(this);
        this.atualizar = this.atualizar.bind(this);
        this.reload = this.reload.bind(this);
    }

    atualizar() {
        let s = this.state;
        s.pct = Math.floor((s.consumido/2000)*100);

        if(s.pct >= 150){
            s.status = "Ótimo";
        }else if(s.pct >= 100){
            s.status = "Bom";
        }else{
            s.status = "Ruim";
        }

        this.setState(s);
    }

    addCopo() {
        let s = this.state;
        s.consumido += 200;

        this.setState(s);

        this.atualizar();
    }
    reload() {
        let s = this.state;
        s.consumido = 0;
        s.status = 'Ruim';
        s.pct = '0';

        this.setState(s);
    }

    render() {
        return(
            <View style={styles.body}>
                <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
                    <View>
                        <View style={styles.infoArea}>
                            <View style={styles.area}>
                                <Text style={styles.areaTitulo}>Meta</Text>
                                <Text style={styles.areaDado}>2000ml</Text>
                            </View>
                            <View style={styles.area}>
                                <Text style={styles.areaTitulo}>Consumido</Text>
                                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
                            </View>
                            <View style={styles.area}>
                                <Text style={styles.areaTitulo}>Status</Text>
                                <Text style={styles.areaDado}>{this.state.status}</Text>
                            </View>
                        </View>

                        <View style={styles.pctArea}>
                            <Text style={styles.pctText}>{this.state.pct}%</Text>
                        </View>

                        <View style={styles.btnArea}>
                            <Button title="Beber 200ml" onPress={this.addCopo}/>
                        </View>

                        <TouchableWithoutFeedback onPress={this.reload}>
                            <View style={styles.reloadArea}>
                                <Image style={styles.reloadIcon} source={require('./images/reload.jpg')} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    bgimage:{
        flex:1,
        width:null
    },
    infoArea:{
        flex:1,
        flexDirection:'row',
        marginTop:70
    },
    area:{
        flex:1,
        alignItems:'center'
    },
    areaTitulo:{
        color:'#45b2fc'
    },
    areaDado:{
        color:'#2b4274',
        fontSize:15,
        fontWeight:'bold'
    },
    pctArea:{
        marginTop:200,
        alignItems:'center'
    },
    pctText:{
        fontSize:70,
        color:'#FFF',
        backgroundColor:'transparent'
    },
    btnArea:{
        marginTop:10,
        alignItems:'center'
    },
    reloadArea:{
        alignItems:'center',
        marginTop:15,
    },
    reloadIcon:{
        width:30,
        height:30
    }
})