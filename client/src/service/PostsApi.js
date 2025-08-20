import  createService from  ".";

export const postsApi = async ()=>{
     const response = createService().get("/id");
     return response
}
export const createPostApi = async (postData) => {
    const response = createService().post("/posts", postData);
    return response;
}

export const updatePostApi = async (id, postData) => {
    const response = createService().put(`/posts/${id}`, postData);
    return response;
}

export const deletePostApi = async (id) => {
    const response = createService().delete(`/posts/${id}`);
    return response;
}
export const getPostByIdApi = async (id) => {
    const response = createService().get(`/posts/${id}`);
    return response;
}           