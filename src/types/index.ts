type Reaction = {
    likes: number;
    dislikes: number
}

type Post = {    
    id: number;
    title: string;
    body: string;
    reactions: Reaction;
    views: number
}

type PostResponse = {
    posts: Post[]
}

type PostDetail = {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

type User ={
    id: number;
    username: string;
}

type Comment = {
    id: number;
    body: string;
    postId: number;
    user: User;
    likes: number;
}

type CommentResponse = {
    comments: Comment[];
    total: number;
    skip: number;
    limit: number;
}

export {PostResponse, Post, PostDetail, User,   Comment, CommentResponse}