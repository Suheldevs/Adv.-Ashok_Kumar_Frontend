import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BlogCard from '../components/BlogCard'
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogData } from '../redux/dataSlice'
function BlogPage() {

const dispatch = useDispatch()
const {blogData,error, status} = useSelector((state)=>state.data)
useEffect(()=>{
dispatch(fetchBlogData())
},[dispatch])

if(status=='loading'){
  return(
    <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
    <div className='text-xl h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Loading..</div>
  </>
  )
}
if(blogData.length == 0){
  return(
    <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
    <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>Blog Data Not Found!</div>
  </>
  )
}
if(error){
  return(
    <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
    <div className='text-red-600 text-lg h-[50vh] justify-center items-center flex font-medium textx-center shadow-2xl rounded p-2'>{error}</div>
    </>
  )
}



  return (
   <>
    <Breadcrumb 
        title="Latest Blogs" 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' }
        ]}
      />
      <div className='container mx-auto lg:px-6 px-4 py-12 bg-white/95'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.isArray(blogData) && blogData.length > 0 ? (
                      blogData.map((post) => (
                        <div key={post._id} className="px-2">
                          <BlogCard
                          key={post._id}
                            slug={post.slug}
                            date={post.updatedAt}
                            category={post.category}
                            title={post.title}
                            imageUrl={post.imageUrl}
                            description={post.description}
                          />
                        </div>
                      ))
                    ) : (
                      <p>No blogs available.</p>
                    )}
        </div>

      </div>
      </>
  )
}

export default BlogPage