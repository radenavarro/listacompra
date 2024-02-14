import { useTheme } from '@react-navigation/native'
import { Text, ImageBackground, View, TouchableHighlight, ScrollView } from 'react-native'
import { AyudaStyles } from './Ayuda-styles'

const Ayuda = (props) => {
  const theme = useTheme()
  const styles = AyudaStyles(theme)

  return (
    <ImageBackground source={require('../../img/image-3ucottvo.png')} resizeMode='repeat'>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={[styles.container]}>
          {/* SECCIÓN INICIAL */}
          <Text style={[styles.h1]}>Pantalla inicial</Text>
          <Text style={[styles.defaultFontStyle]}>Es la pantalla donde se pueden crear listas con productos y archivarlas cuando estén finalizadas.</Text>
          <Text style={[styles.h2]}>Botonera superior</Text>
          <Text style={[styles.defaultFontStyle]}>
            En la parte superior de la pantalla, al lado del botón de ayuda que te ha llevado hasta aquí, hay otros 3 botones:
            "Nueva lista", "Limpiar campos" y "Archivar lista"
          </Text>
          <Text style={[styles.bold]}>Nueva lista: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Elimina la lista actual. El efecto es el mismo que si eliminaramos los productos a mano 1 por 1.
          </Text>
          <Text style={[styles.bold]}>Limpiar campos: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Sirve para resetear los campos de texto para añadir producto y cantidad, para no tener que borrarlos a mano cada vez que
            se añade un producto.
          </Text>
          <Text style={[styles.bold]}>Archivar lista: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Finaliza la lista de la compra, y <Text style={[styles.bold]}>añade los productos que figuran en ella a tu stock personal.</Text>.
            La lista automáticamente se mueve a la sección "Archivo"
          </Text>
          <Text style={[styles.h2]}>Sección para añadir productos</Text>
          <Text style={[styles.defaultFontStyle]}>
            Es la sección que te permite añadir productos a la lista en las cantidades que desees. Contiene los campos de producto y
            cantidad, y los botones de micrófono y añadir.
          </Text>
          <Text style={[styles.bold]}>Campo de producto: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Es el campo en el que le darás nombre al nuevo producto que quieras añadir a la lista. Puedes escribir el nombre del producto
            manualmente o bien por voz. Cuando termines de escribir (o nombrar por voz) el producto, se realiza una búsqueda en tu stock
            personal y, si ese producto ya lo tienes añadido, te aparecerá para que puedas volver a añadirlo de nuevo. Puedes no añadir el
            producto que te encuentre el programa en la búsqueda, pero ten en cuenta que, de ese
            modo, <Text style={[styles.bold]}>Se crearán 2 productos distintos</Text>. Aunque tengan nombre similar (o incluso el mismo
            nombre)
          </Text>
          <Text style={[styles.bold]}>Campo de cantidad: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Especifica la cantidad en la que añades un producto a la lista. Por ejemplo, para añadir 6 bricks de leche, añadirías el
            producto "brick de leche" y, en este campo, añadirías un 6.
          </Text>
          <Text style={[styles.bold]}>Botón de micrófono: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Te permite añadir un producto por voz. <Text style={[styles.bold]}>Requiere que le concedas permisos para el micrófono de tu dispositivo.</Text>
            Funciona mediante pulsación, no requiere mantener el botón pulsado. Al pulsarlo, la app escuchará durante un corto periodo de
            tiempo, en el cual puedes decir el nombre del producto y su cantidad.
          </Text>
          <Text style={[styles.defaultFontStyle]}>
            Cuando termines, el nombre del producto se añadirá al campo de texto y la cantidad se añadirá al campo de cantidad
            (por lo que todavía requerirán tu confirmación antes de añadir el producto a la lista). Por ejemplo, si le digo a
            la app "6 bricks de leche", me añadirá "bricks de leche" en el campo de producto, y "6" en el campo de cantidad.
          </Text>
          <Text style={[styles.bold]}>Botón de añadir: </Text>
          <Text style={[styles.defaultFontStyle]}>
            Pulsar este botón añade el producto que tengas en el campo de producto a tu lista actual, y en las cantidades que tengas especificadas
            en el campo de cantidad. Si no has rellenado el campo de cantidad, se añadirá en cantidad "1"
          </Text>
          <Text style={[styles.h2]}>Sección de productos de la lista de la compra</Text>
          <Text style={[styles.defaultFontStyle]}>
            Contiene la lista de productos que componen tu lista de la compra. Los productos pueden marcarse al pulsarlos tal y como
            tacharías un producto en tu lista de la compra en papel de toda la vida, y pueden eliminarse moviéndolos hacia la
            derecha (ten en cuenta que esto <Text style={[styles.bold]}>no suma el producto al stock</Text>, por lo que sólo deberías
            hacerlo en caso de error al añadirlo. Únicamente lo estarías eliminando de tu lista).
          </Text>
          {/* SECCIÓN ARCHIVO */}
          <Text style={[styles.h1]}>Archivo</Text>
          <Text style={[styles.defaultFontStyle]}>
            Una lista resumida con todas las listas de la compra que hayas archivado. Si mueves un renglón hacia la izquierda verás un
            botón que te permitirá crear una nueva lista a partir de la lista que estés moviendo, con los mismos productos y cantidades
            (luego podrás modificarla si quieres), mientras que si arrastras la lista hacia la derecha la eliminarás. No tengas miedo de
            eliminar listas, puesto que su único propósito (aparte de generar listas rápidamente a partir de otras listas) es servir de
            registro. Borrar una lista no va a modificar tu stock personal.
          </Text>
          {/* SECCIÓN STOCK */}
          <Text style={[styles.h1]}>Stock</Text>
          <Text style={[styles.defaultFontStyle]}>
            Es la pantalla donde podrás ver tu stock personal. Cada producto que tengas aparecerá en una lista y verás nombres y cantidades
            (las cantidades son únicamente en unidades, la app <Text style={[styles.bold]}>no</Text> está pensada para manejar otras como
            kg o l).
          </Text>
          <Text style={[styles.defaultFontStyle]}>
            Al mover cada elemento a la izquierda verás 2 botones, un "+" y un "-", mediante los cuales puedes modificar las cantidades de
            cada uno a mano si así lo deseas. Si arrastras el elemento a la derecha, lo eliminarás por completo de tu stock.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Ayuda
