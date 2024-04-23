export interface PostsList {
  success: boolean
  data: Posts[]
  message: string
  statusCode: number
}

export interface Posts {
  id: number
  datePublish: string
  headerName: string
  headerId: number
  titleAr: string
  titleEn: string
  detailAr: string
  detailEn: string
  libaryMediaId: number
  isActive: any
  imageUrl: any
  url: string
  userName: string
}
