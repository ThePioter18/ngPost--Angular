import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from './../../shared/models/post.interface';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { File } from './../../shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsColection: AngularFirestoreCollection<Post>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) {
    this.postsColection = afs.collection<Post>('posts');
  }

  public getAllPosts(): Observable<Post[]> {
    return this.postsColection
      .snapshotChanges()
      .pipe(
        map(docArray =>
          docArray.map(doc => {
            const data = doc.payload.doc.data() as Post;
            const id = doc.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getOnePost(id: Post): Observable<Post> {
    return this.afs.doc<Post>(`posts/${id}`).valueChanges();
  }

  public deletePost(post: Post) {
    // Firebase/remove
    return this.postsColection.doc(post.id).delete();
  }

  public editPost(post: Post, newImage?: File) {
    // Firebase/update
    if (newImage) {
      this.uploadImage(post, newImage);

    } else {
      return this.postsColection.doc(post.id).update(post);
    }
  }

  private savePost(post: Post) {
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost
    };

    if (post.id) {
      // updatePostId()
      return this.postsColection.doc(post.id).update(postObj);

    } else {
      // addPost()
      return this.postsColection.add(postObj);
    }

  }

  private uploadImage(post: Post, image: File) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;
          // addPost()
          this.savePost(post);

        });
      })
    ).subscribe();
  }

  public createPostAndUpdatePost(post: Post, image: File) {

    this.uploadImage(post, image);

  }


}
