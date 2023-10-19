import axios from 'axios'
import { PostProps } from '@/types/postTypes'

const postApi = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const getAllPosts = (): Promise<PostProps[]> =>
  postApi.get('/post').then((res) => res.data)

export const getPostById = (id: string): Promise<PostProps[]> =>
  postApi.get(`/post/${id}`).then((res) => res.data)
