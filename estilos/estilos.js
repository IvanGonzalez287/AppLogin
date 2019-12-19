

 import {StyleSheet} from 'react-native'

export default StyleSheet.create({

///estilos Login
	container: {
	   flex: 1, 
	   alignItems: 'center',
	   justifyContent: 'center',
	   marginTop: 20
	},

	Titular: {
	   
	   marginBottom: 20,
	   fontWeight: 'bold',
	   fontSize: 20,
	},

	TextInput:{ 
	  		width:300,
	        height: 50, 
	        margin: 10,
	        padding:10,
	        borderColor: 'gray', 
	        borderWidth: 1,
	        borderRadius: 25,

	     },

	 button: {
	    alignItems: 'center',
	    backgroundColor: '#2196f3',
	    padding: 10,
	    width:90,
	    borderRadius: 25,
	    
	  },

	  buttonText:{
	  	color:'white',
	  	fontWeight:'bold'
	  },
	
	///estilos Resultados
	  linkText:{
	  	padding:10,
	  	 fontWeight: 'bold',
	  }
});