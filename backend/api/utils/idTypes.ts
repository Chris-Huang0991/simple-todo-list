export const toIdType = (id: string, type: string): string => {
  return Buffer.from(`${id}:${type}`).toString('base64')
}

export const fromIdType = (idType: string): string => {
  return Buffer.from(idType, 'base64').toString('ascii')
}

type IdObject = {
  __typename: string
  id: string
  prismaObjectName: string
}
export const decodeIdType = (idType: string): IdObject => {
  const [id, __typename] = fromIdType(idType).split(':')
  const prismaObjectName = __typename.charAt(0).toLowerCase() + __typename.slice(1) // from TitleCase to camelCase as in prisma

  // console.log({
  //   __typename,
  //   id,
  //   prismaObjectName
  // })

  return {
    __typename,
    id,
    prismaObjectName
  }
}