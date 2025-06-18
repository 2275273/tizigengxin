export default {
  async fetch(request, env) {
    if (request.method === 'GET') {
      const data = await env.SUB_KV.get('subscription') || '暂无订阅数据';
      return new Response(data, {
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      });
    } else if (request.method === 'POST') {
      const auth = request.headers.get('Authorization');
      if (auth !== `Bearer ${env.SECRET_TOKEN}`) {
        return new Response('Unauthorized', { status: 401 });
      }
      try {
        const res = await fetch('https://tizi.239000.xyz/download/sub');
        if (!res.ok) throw new Error('抓取失败');
        const text = await res.text();
        await env.SUB_KV.put('subscription', text);
        return new Response('更新成功', { status: 200 });
      } catch (e) {
        return new Response('更新失败：' + e.message, { status: 500 });
      }
    }
    return new Response('Method Not Allowed', { status: 405 });
  },
};
