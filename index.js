assets/js/index.js
function  tocaSom  ( seletorÁudio )  {
    const  elemento  =  documento . querySelector ( seletorAudio ) ;

    if  ( elemento  &&  elemento . localName  ===  'áudio' )  {
        elemento . jogar ( ) ;
    }
    senão  {
        //alert('Elemento não encontrado');
        console . log ( 'Elemento não encontrado ou seletor inválido' ) ;
    }

}

const  listaDeTeclas  =  documento . querySelectorAll ( '.tecla' ) ;

//pára
for  ( let  contador  =  0 ;  contador  <  listaDeTeclas . length ;  contador ++ )  {

    const  tecla  =  listaDeTeclas [ contador ] ;
    const  instrumento  =  tecla . listaclasse [ 1 ] ;
    const  idAudio  =  `#som_ ${ instrumento } ` ;  //modelo de string

    tecla . onclick  =  função  ( )  {
        tocaSom ( idAudio ) ;
    }

    tecla . onkeydown  =  função  ( evento )  {

        if  ( evento . código  ===  'Espaço'  ||  evento . código  ===  'Enter' )  {
            tecla . lista de classes . adicione ( 'ativa' ) ;
        }

    }

    tecla . onkeyup  =  função  ( )  {
        tecla . lista de classes . remover ( 'ativa' ) ;
    }

}