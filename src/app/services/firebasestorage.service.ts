import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebasestorageService {

  constructor(private firestore: AngularFirestore) { }
  // Meotodo para crear un nuevo vehiculo
  public crearAuto(data: {marca: string, modelo:string, anio:number, url: string}) {
    return this.firestore.collection('autos').add(data);
  }
  // Metodo para obtener un auto por ID
  public obtenerAutoId(documentId: string) {
    return this.firestore.collection('autos').doc(documentId).snapshotChanges();
  }
  // Metodo para obtener todos los autos
  public ObtenerAutos() {
    return this.firestore.collection('autos').snapshotChanges();
  }
  // Metodo para actualizar un auto
  public actualizarAuto(documentId: string, data: any) {
    return this.firestore.collection('autos').doc(documentId).set(data);
  }
    // Metodo para eliminar un auto
    public eliminarAuto(documentId: string) {
      return this.firestore.collection('autos').doc(documentId).delete();
    }
}
