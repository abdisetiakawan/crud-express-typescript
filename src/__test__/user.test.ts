import supertest from 'supertest'
import web from '../middleware/web'

describe('User Login', () => {
  it('should return valid user login data', async () => {
    const response = await supertest(web).post('/api/login').send({
      email: 'bedikadiryt@gmail.com',
      password: 'bangjalio'
    })

    expect(response.status).toBe(200)
    expect(response.body.message).toEqual('Login Berhasil')
  })

  it('should return invalid user login data', async () => {
    const response = await supertest(web).post('/api/login').send({
      email: 'dbedikadiryt@gmail.com',
      password: 'bangjalio'
    })

    expect(response.status).toBe(404)
    expect(response.body.message).toEqual('Login Gagal')
  })

  it('should return invalid user login data', async () => {
    const response = await supertest(web).post('/api/login').send({
      email: 'bedikadiryt@gmail.com',
      password: 'bangdjalio'
    })

    expect(response.status).toBe(401)
    expect(response.body.message).toEqual('Login Gagal')
  })
})
