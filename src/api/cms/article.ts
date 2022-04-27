import { http } from '/@/utils/request';

export default {
	
	/**
	 * 获取列表
	 * @param kind 文章分类
	 * @param scopeLevel 数据权限层级过滤参数，0：默认层级，1：系统级，2：应用级，3：租户级，4：用户级
	 * @param params 要传的参数值
	 * @returns 返回接口数据
	 */
	getList:async (kind:string,scopeLevel:string|number=0,params: object={})=>{
		const url=`/v1/admin/cms/article/${kind}/${scopeLevel}`;
		return await http.get(url, params);
	},
	/**
	 * 获取前台文章列表
	 * @param kind 文章分类
	 * @param scopeLevel 数据权限层级过滤参数，0：默认层级，1：系统级，2：应用级，3：租户级，4：用户级
	 * @param params 要传的参数值
	 * @returns 返回接口数据
	 */
	 getFrontEndList:async (kind:string,params: object={})=>{
		 params["kind"]=kind;
		const url=`/v1/cms/article`;
		return await http.get(url, params);
	},
	/**
	 * 获取前台文章列表
	 * @param kind 文章分类
	 * @param scopeLevel 数据权限层级过滤参数，0：默认层级，1：系统级，2：应用级，3：租户级，4：用户级
	 * @param params 要传的参数值
	 * @returns 返回接口数据
	 */
    getById:async (id:number|string)=>{
		const url=`/v1/admin/cms/article/${id}`;
		return await http.get(url);
	},
    
	/**
	 * 新增
	 * @param data 信息
	 * @returns 返回接口数据
	 */
	insert:async(data:object)=>{
		const url=`/v1/admin/cms/article`;
		return await http.post(url, data);
	},
	/**
	 * 更新
	 * @param data 信息
	 * @returns 返回接口数据
	 */
	update:async(data:object)=>{
		const url=`/v1/admin/cms/article/${data.Id}`;
		return await http.post(url, data);
	},
	/**
	 * 新增或更新
	 * @param data 信息
	 * @returns 返回接口数据
	 */
	save:async(data:object)=>{
		if(!data.Id||data.Id=="0"){
			const url=`/v1/admin/cms/article`;
			return await http.post(url, data);
		}
		const url=`/v1/admin/cms/article/${data.Id}`;
		return await http.post(url, data);
	},
	/**
	 * 设置已经点击（阅读）
	 * @param ids 标识，字符串或数组
	 * @returns 返回接口数据
	 */
	 updateIsClick:async(ids:number|string|[])=>{
		const url=`/v1/cms/article/click`;
		if(ids instanceof Array){
			return await http.post(url,ids);
		}
			return await http.post(url,[ids]);
	},
	/**
	 * 删除
	 * @param ids 标识，字符串或数组
	 * @returns 返回接口数据
	 */
	delete:async(ids:number|string|[])=>{
		if(ids instanceof Array){
			const url=`/v1/admin/cms/article/delete`;
			return await http.post(url,ids);
		}
		const url=`/v1/admin/cms/article/delete/${ids}`;
			return await http.post(url);
	},
}