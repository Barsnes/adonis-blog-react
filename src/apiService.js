import axios from 'axios'

export default class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3333/api'
    })
  }

  getBlogs = async () => {
    return this.http.get(`/blogs`)
  }

  storeBlog = async (event) => {
    return this.http.post(`/blogs`, event)
  }

  deleteBlog = async (id) => {
    return this.http.delete(`/blogs/${id}`)
  }
}
