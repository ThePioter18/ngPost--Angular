import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from './../../shared/models/post.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) {

  }

  // public getAllPosts(): Observable<Post[]> {
  //   return this.afs.collection('posts')
  //     .snapshotChanges()
  //     .pipe(
  //       map(docArray =>
  //         docArray.map(doc => {
  //           const data = doc.payload.doc.data() as Post;
  //           const id = doc.payload.doc.id;
  //           return { id, ...data };
  //         })
  //       )
  //     );
  // }

  // MOJE
  public getAllPosts(): Observable<Post[]> {
    return this.afs.collection('posts').snapshotChanges().pipe(map(docArray => {
      return docArray.map(doc => {
        const titlePost = 'titlePost';
        const contentPost = 'contentPost';
        const imagePost = 'imagePost';
        const tagsPost = 'tagsPost';

        return ({
          id: doc.payload.doc.id,
          titlePost: doc.payload.doc.data()[titlePost],
          contentPost: doc.payload.doc.data()[contentPost],
          imagePost: doc.payload.doc.data()[imagePost],
          tagsPost: doc.payload.doc.data()[tagsPost],

        });
      });
    }));
  }

  public getOnePost(id: Post): Observable<Post> {
    return this.afs.doc<Post>(`posts/${id}`).valueChanges();
  }

}
